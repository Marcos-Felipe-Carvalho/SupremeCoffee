import { DescricaoReduzida } from './descricao-reduzida.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DescricaoReduzida
  ],
  exports: [
    DescricaoReduzida
  ]
})
export class PipeModule { }
