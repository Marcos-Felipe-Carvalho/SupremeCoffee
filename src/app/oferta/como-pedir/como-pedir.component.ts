import { ProdutosService } from './../../produtos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-pedir',
  templateUrl: './como-pedir.component.html',
  styleUrls: ['./como-pedir.component.scss'],
  providers: [ProdutosService]
})
export class ComoPedirComponent implements OnInit {

  public comoPedir:string

  constructor(
    private route:ActivatedRoute,
    private produtoService:ProdutosService
  ) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((parametro:Params)=>{
      this.produtoService.getComoPedirId(parametro.id)
        .then((descricao:string)=>{
          this.comoPedir = descricao
        }).catch(
          (param:any)=>console.log(param)
        )
    })

  }  

}
