import { PipeModule } from './shared/pipe/pipe.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { OfertaComponent } from './oferta/oferta.component';
import { DescricaoComponent } from './oferta/descricao/descricao.component';
import { ComoPedirComponent } from './oferta/como-pedir/como-pedir.component';



@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    CardapioComponent,
    FreelancerComponent,
    OfertaComponent,
    DescricaoComponent,
    ComoPedirComponent,
  ],
  imports: [
    PipeModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
