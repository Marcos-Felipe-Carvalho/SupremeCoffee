import { Observable } from 'rxjs';
import { URL_API } from './app.api';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Produtos } from './shared/model/produto.model';
import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';
import { retry } from 'rxjs/operators';



@Injectable()
export class ProdutosService{
    
    //private url_api:string = 'http://localhost:3000/ofertas' 
    constructor(private http:HttpClient){}

    
    public getOfertas():Promise<Produtos[]>{
        // efetuar uma requisição http
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta:any )=> resposta)
        // retornar um promise Oferta
        
    }

    public getProjetosFreenlancer(categoria: string): Promise<Produtos[]>{
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta:any )=> resposta)
    }

    public getItensCardapio(categoria: string): Promise<Produtos[]>{
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta:any)=>resposta)
    }

    public getProdutosPorId(id: number): Promise<Produtos>{
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
        .toPromise()
        .then((resposta:any)=>{
            return resposta.shift()
        })
    }

    public getComoPedirId(id:number):Promise<string>{
        return this.http.get(`${URL_API}/como-pedir?id=${id}`)
        .toPromise()
        .then((resposta:any)=>{
            return resposta[0]['descricao']
        })
    }

    public getDescricaoId(id:number):Promise<string>{
        return this.http.get(`${URL_API}/descricao?id=${id}`)
        .toPromise()
        .then((resposta:any)=>{
            return resposta[0]['detalhes']
        })
    }

    public pesquisarOfertas(termoString):Observable<Produtos[]>{
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termoString}`)
        .pipe(retry(10))
        .pipe(map((resposta:any)=> resposta))
    }
    //Processamento Sincrono utilizando Promise
    /*public getOfertas2(): Promise<Array<Oferta>>{
        return new Promise((resolve, reject)=>{
            //algum tipo de processamento, que ao finalizar chama a função resolve ou reject
            let deu_certo = false
            if(deu_certo){
                resolve(this.ofertas)
            }
            else{
                reject({codigo_erro: 404, mensagem_erro: "Objeto não encontrado"})
            }
        })
    }
    
    //Processamento Assíncrono utilizando Promise
    public getOfertas3(): Promise<Array<Oferta>>{
        return new Promise((resolve, reject)=>{
            let deu_certo = true
            if (deu_certo) {
                setTimeout(()=>resolve(this.ofertas), 3000)
            }else{
                reject({codigo_erro: 404, mensagem_erro: "Objeto não encontrado"})
            }
        })
        .then((ofertas: Array<Oferta>)=>{
            console.log('primeiro then')
            return ofertas
        })
        .then((ofertas: Array<Oferta>)=>{
            console.log('segundo then')
            return new Promise((resolve2, reject2)=>{
                setTimeout(()=>resolve2(this.ofertas), 3000)
            })
        })
        .then((ofertas: Array<Oferta>)=>{
            console.log('terceiro then')
            return ofertas
        })
    }*/

}