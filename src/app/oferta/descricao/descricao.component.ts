import { ProdutosService } from './../../produtos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrls: ['./descricao.component.scss'],
  providers: [ProdutosService]
})
export class DescricaoComponent implements OnInit {

  public detalhes:string

  constructor(
    private route:ActivatedRoute, 
    private produtoService:ProdutosService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((parametro:Params)=>{
      this.produtoService.getDescricaoId(parametro.id)
        .then((detalhes:string)=>{
          this.detalhes = detalhes
        })
        .catch((param:any)=>console.log(param))
    })

   
  }

}
