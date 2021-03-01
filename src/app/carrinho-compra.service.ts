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
        this.itens.push(itemCarrinho)
    }
}