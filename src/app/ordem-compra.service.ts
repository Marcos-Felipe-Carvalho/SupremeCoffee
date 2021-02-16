import { URL_API } from './app.api';
import { Observable, pipe } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Pedido } from './shared/model/pedido.model';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable()
export class OrdemCompraService {
  
  constructor(private httpClient:HttpClient){}
  
  public efetivarCompra(pedido:Pedido):Observable<number>{

    let headers:HttpHeaders = new HttpHeaders()

    //headers.append('Content-type', 'application/json')

    return this.httpClient.post(
      `${URL_API}/pedidos`,
      JSON.stringify(pedido),
      {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json '
        }
      }
    )
    .pipe(map((resposta:Response)=>resposta['id']))
    
  }
}
