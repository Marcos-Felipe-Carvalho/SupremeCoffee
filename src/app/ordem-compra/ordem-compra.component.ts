import { ItemCarrinho } from './../shared/model/item-carrinho.model';
import { CarrinhoCompraService } from './../carrinho-compra.service';
import { Pedido } from './../shared/model/pedido.model';
import { OrdemCompraService } from './../ordem-compra.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public endereco:string = ''
  public numero:string  = ''
  public complemento:string = ''
  public formaPagamento:string = ''


  //Pedido
  public pedido:Pedido = new Pedido('','','','')

  //Carrinho de Compra
  public idPedidoCompra:number
  public itensCarrinho: Array<ItemCarrinho> = []

  //controle de validação dos campos
  public validaEndereco:Boolean
  public validaNumero:Boolean
  public validaComplemento:Boolean
  public validaFormaPagamento:Boolean

  //estados primitivos dos campos
  public enderecoEstadoPrimitivo:boolean = true
  public numeroEstadoPrimitivo:boolean = true
  public complementoEstadoPrimitivo:boolean = true
  public formaPagamentoEstadoPrimitivo:boolean = true
  
  //controlar estado do estado do form
  public formEstado:string = "disabled"
  constructor(
    private ordemCompraService:OrdemCompraService,
    private carrinhoCompraService: CarrinhoCompraService
    ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoCompraService.exibirItens()
    console.log(this.itensCarrinho)
  }

  public atualizaEndereco(endereco:string):void{
    this.endereco = endereco
    
    this.enderecoEstadoPrimitivo = false
    //se a string for maior que 4
    if(this.endereco.length > 3){
      this.validaEndereco = true
    }else{
      this.validaEndereco = false
    }

    this.habilitaForm()
  }

  public atualizaNumero(numero:string):void{
    this.numero = numero
    
    this.numeroEstadoPrimitivo = false
    //O campo numero só será válido se possuir 1 ou mais caracteres
    if(this.numero.length > 0){
      this.validaNumero = true
    }else{
      this.validaNumero = false
    }

    this.habilitaForm()
  }

  public atualizaComplemento(complemento: string):void{
    this.complemento = complemento
    this.complementoEstadoPrimitivo=false
    //O campo complemento só será válido se possuir 1 ou mais caracteres, porém, por ser opcional nunca será inválido
    if (this.complemento.length > 1) {
      this.validaComplemento = true
    }else{
      this.validaComplemento = false
    }

    this.habilitaForm()
  }

  public atualizaFormaPagamento(formaPagamento: string):void{
    this.formaPagamento = formaPagamento
    this.formaPagamentoEstadoPrimitivo = false
    //O campo formaPagamento só será válido, se o valor for 'debito' ou 'credito'
    if (this.formaPagamento == 'debito' || this.formaPagamento == 'dinheiro') {
      this.validaFormaPagamento = true
    }else{
      this.validaFormaPagamento = false
    }

    this.habilitaForm()
  }

  public habilitaForm():void{
    if (this.validaEndereco==true && this.validaNumero==true && this.validaFormaPagamento==true){
      this.formEstado = ''
    }else{
      this.formEstado = 'disabled'
    }
  }

  public confirmarCompra():void{

    this.pedido.endereco = this.endereco
    this.pedido.numero = this.numero
    this.pedido.complemento = this.complemento
    this.pedido.formaPagamento = this.formaPagamento

    this.ordemCompraService.efetivarCompra(this.pedido)
      .subscribe((resposta:number)=>{
        this.idPedidoCompra = resposta
      })
  }
}
