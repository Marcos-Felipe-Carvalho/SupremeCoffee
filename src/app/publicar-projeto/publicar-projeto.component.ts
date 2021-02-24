import { PublicarProjetoService } from './../publicar-projeto.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PublicarProjeto } from '../shared/model/publicar-projeto.model';

@Component({
  selector: 'app-publicar-projeto',
  templateUrl: './publicar-projeto.component.html',
  styleUrls: ['./publicar-projeto.component.scss'],
  providers: [PublicarProjetoService]
})
export class PublicarProjetoComponent implements OnInit {

  public idProjeto:number

  public formulario: FormGroup = new FormGroup({
    categoria_projeto: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]),
    nome_projeto:      new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    descricao_projeto: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
    nivel_experiencia: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)])
  })

  constructor(private publicarProjetoService: PublicarProjetoService) { }

  ngOnInit(): void {
  }

  public publicarProjeto():void{
    if(this.formulario.status == 'INVALID'){
      this.formulario.get('categoria_projeto').markAsTouched()
      this.formulario.get('nome_projeto').markAsTouched()
      this.formulario.get('descricao_projeto').markAsTouched()
      this.formulario.get('nivel_experiencia').markAsTouched ()
    }
    else{
      let publicarProjeto: PublicarProjeto =  new PublicarProjeto(
        this.formulario.value.categoria_projeto, 
        this.formulario.value.nome_projeto, 
        this.formulario.value.descricao_projeto, 
        this.formulario.value.nivel_experiencia
      )

      this.publicarProjetoService.publicarProjeto(publicarProjeto)
      .subscribe((idProjeto:any)=>{
        this.idProjeto = idProjeto
      })
    }
    console.log(this.formulario)
  }

}
