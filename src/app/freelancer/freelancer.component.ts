import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produtos } from '../shared/model/produto.model';

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.scss'],
  providers: [ProdutosService]
})
export class FreelancerComponent implements OnInit {

  public projetos:Array<Produtos>

  constructor(protected produtoService: ProdutosService) { }

  ngOnInit(): void {
    this.produtoService.getProjetosFreenlancer('projeto_freenlancer')
    .then(( projetos: Produtos[])=>{
      this.projetos = projetos
      console.log(this.projetos)
    }).catch(
      (param:any)=>console.log(param)
    )
  }
}
