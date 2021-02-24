import { PublicarProjetoComponent } from './publicar-projeto/publicar-projeto.component';
import { PropostaProjetoComponent } from './proposta-projeto/proposta-projeto.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { DescricaoComponent } from './oferta/descricao/descricao.component';
import { ComoPedirComponent } from './oferta/como-pedir/como-pedir.component';
import { OfertaComponent } from './oferta/oferta.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { HomeComponent } from './home/home.component';
import {Routes} from '@angular/router'

export const ROUTES: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'cardapio', component:CardapioComponent},
    {path:'freenlancer', component: FreelancerComponent},
    {path: 'oferta', component: HomeComponent},
    {path:'oferta/:id', component: OfertaComponent,
        children: [
            {path:'', component: ComoPedirComponent},
            {path:'como-pedir', component: ComoPedirComponent},
            {path: 'descricao', component: DescricaoComponent}
        ]
    },
    {path:'ordem-compra', component: OrdemCompraComponent},
    {path:'proposta-projeto', component: PropostaProjetoComponent},
    {path:'publicar-projeto', component: PublicarProjetoComponent},
]
