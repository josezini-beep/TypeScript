export class Negociacao{
    #data; 
    #valor; 
    #quantidade;

    constructor(data,quantidade,valor){
        this.#data = data;
        this.#quantidade = quantidade
        this.#valor = valor
    }
}
