import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposta-projeto-sucesso',
  templateUrl: './proposta-projeto-sucesso.component.html',
  styleUrls: ['./proposta-projeto-sucesso.component.scss']
})
export class PropostaProjetoSucessoComponent implements OnInit {

  @Input() idPropostaProjeto:number
  constructor() { }

  ngOnInit(): void {
  }

}
