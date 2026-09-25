export class Negociacao {
    #data: Date;
    #valor: number;
    #quantidade: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    get data() {
        return this.#data;
    }

    get quantidade() {
        return this.#quantidade;
    }

    get valor() {
        return this.#valor;
    }

    get volume() {
        return this.#valor * this.#quantidade;
    }
}