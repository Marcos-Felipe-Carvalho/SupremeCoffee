import { map } from 'rxjs/operators';
import { Produtos } from './shared/model/produto.model';
import { ItemCarrinho } from './shared/model/item-carrinho.model';

export class CarrinhoCompraService{
    public itens: Array<ItemCarrinho> = []     

    public exibirItens(): Array<ItemCarrinho> {
        return this.itens
    }

    public incluirItem(produto:Produtos):void {
        let itemCarrinho:ItemCarrinho = new ItemCarrinho(
            produto.id,
            produto.imagens[0],
            produto.titulo,
            produto.descricao_oferta,
            produto.valor,
            1
        )

        //verificar se o item em questão já existe em dentro de this.itens
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho)=> item.id === itemCarrinho.id)

        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade += 1
        } else {
            this.itens.push(itemCarrinho)
        }
    }

    public totalCarrinhoCompras():number{
        let total: number = 0

        this.itens.map((item: ItemCarrinho) => total = total+(item.valor * item.quantidade))

        return total
    }

    public adicionarAoCarrinho(itemCarrinho: ItemCarrinho):void{

        //incrementar item no carrinho
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
        if(itemCarrinhoEncontrado){
            itemCarrinhoEncontrado.quantidade += 1
        }
    }

    public decrementarDoCarrinho(itemCarrinho: ItemCarrinho):void{
        //decrementar do carrinho
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho)=> item.id === itemCarrinho.id)
        if(itemCarrinhoEncontrado){
            itemCarrinhoEncontrado.quantidade -= 1

            if(itemCarrinhoEncontrado.quantidade === 0){
                this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1)
            }
        }
    }

    public esvaziarCarrinho():void{
        this.itens = []
    }
}