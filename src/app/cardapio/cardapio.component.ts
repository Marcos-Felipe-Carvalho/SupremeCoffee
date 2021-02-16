import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produtos } from '../shared/model/produto.model';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss'],
  providers: [ProdutosService]
})
export class CardapioComponent implements OnInit {

  public itensCardapio: Array<Produtos>

  constructor(protected produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.getItensCardapio('item_cardapio')
    .then((itensCardapio: Produtos[])=>{
      this.itensCardapio = itensCardapio
      console.log(this.itensCardapio)
    }).catch(
      (param:any)=>console.log(param)
    )

  }

}
