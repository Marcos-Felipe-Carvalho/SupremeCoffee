import { Produtos } from './../shared/produto.model';
import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
  providers: [ProdutosService]
})
export class OfertaComponent implements OnInit {

  public produto:Produtos

  constructor(
    private route:ActivatedRoute, 
    private produtoService:ProdutosService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((paramentros:Params)=>{
      this.produtoService.getProdutosPorId(paramentros.id)  
      .then((produto: Produtos)=>{
          this.produto = produto
      })  
    })
   
  }

}
