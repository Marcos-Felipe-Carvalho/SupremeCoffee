export class ItemCarrinho{
    constructor(
        public id:number,
        public img: object,
        public titulo: string,
        public descricao_produto:string,
        public valor:number,
        public quantidade:number
    ){}
}