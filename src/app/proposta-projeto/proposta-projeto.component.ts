import { PropostaProjetoService } from './../proposta-projeto.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PropostaProjeto } from '../shared/model/proposta-projeto.model';

@Component({
  selector: 'app-proposta-projeto',
  templateUrl: './proposta-projeto.component.html',
  styleUrls: ['./proposta-projeto.component.scss'],
  providers: [PropostaProjetoService]
})
export class PropostaProjetoComponent implements OnInit {

  public idPropostaProjeto:number

  @ViewChild('formulario') public f:NgForm
  
  constructor(private propostaProjetoService:PropostaProjetoService) { }

  ngOnInit(): void {
  }

  public realizarProposta():void{
    
    let propostaProjeto: PropostaProjeto = new PropostaProjeto(
      this.f.value.valorProposta, 
      this.f.value.duracaoEstimada,
      this.f.value.detalhes
    )
    this.propostaProjetoService.enviarProposta(propostaProjeto)
      .subscribe((idPropostaProjeto:any)=>{
        this.idPropostaProjeto = idPropostaProjeto
      })
  }
}
