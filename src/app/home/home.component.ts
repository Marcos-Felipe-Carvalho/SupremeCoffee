import { Observable, Subject, of } from 'rxjs';
import { Produtos } from '../shared/model/produto.model';
import { ProdutosService } from '../produtos.service';
import { Component, OnInit } from '@angular/core';

import {
  debounceTime,
  switchMap,
  distinctUntilChanged,
  catchError
} from "rxjs/operators";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ProdutosService]
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Produtos>
  
  public ofertasResultadoBusca: Observable<Produtos[]>

  public imgUrl: string = '/assets/banner/banner2.png';
  public colorCircle: string= "#D96409";

  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(protected produtoService:ProdutosService) { }

  changeImgSlider(imgUrlFlex):void{
    this.imgUrl = imgUrlFlex
  }

  changeColorCircle(color):void{
    this.colorCircle = color
  }
  ngOnInit(): void {
    //this.ofertas = this.ofertasService.getOfertas()
    this.produtoService.getOfertas()
      .then((ofertas: Produtos[])=>{
        this.ofertas = ofertas
      }).catch(
        (param:any)=>console.log(param)
      )

    //Filtrar ofertas
    this.ofertasResultadoBusca = this.subjectPesquisa
      .pipe(debounceTime(1000)) //executa a ação do switchMap após 1 segundo
      .pipe(distinctUntilChanged()) //verifica se o termo digitado corresponde ao anterior
      .pipe(switchMap((termoDaBusca: string) => {
        if (termoDaBusca.trim() === '') {
          //console.log('requisição api')
          //retornar um observable de array de ofertas vazio
          return of<Produtos[]>([])
        }
        return this.produtoService.pesquisarOfertas(termoDaBusca)
      }))

      .pipe(catchError((err:any)=>{
        console.log(err)
        return of<Produtos[]>([])
      }))

    
  }

  public pesquisarOferta(termoDaBusca: string):void{
    //console.log('keyup caracter', termoDaBusca)
    this.subjectPesquisa.next(termoDaBusca)
  }
}
