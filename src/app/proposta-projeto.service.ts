import { URL_API } from './app.api';
import { Observable,pipe } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PropostaProjeto } from './shared/model/proposta-projeto.model';

@Injectable()
export class PropostaProjetoService{

    constructor(private httpClient: HttpClient){}

    public enviarProposta(propostaProjeto: PropostaProjeto): Observable<number>{
        
        let headers:HttpHeaders = new HttpHeaders()

        //headers.append('Content-type', 'application/json')
    
        return this.httpClient.post(
          `${URL_API}/propostas-projetos`,
          JSON.stringify(propostaProjeto),
          {
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json '
            }
          }
        )
        .pipe(map((resposta: Response)=>resposta['id']))        
    }
}