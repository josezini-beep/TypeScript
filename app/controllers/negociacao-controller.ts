import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

constructor() {
    const data = document.querySelector<HTMLInputElement>('#data');
    const quantidade = document.querySelector<HTMLInputElement>('#quantidade');
    const valor = document.querySelector<HTMLInputElement>('#valor');

    if (!data || !quantidade || !valor) {
        throw new Error('Não foi possível encontrar os campos do formulário.');
    }

    this.inputData = data;
    this.inputQuantidade = quantidade;
    this.inputValor = valor;
}

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        negociacao.data.setDate(12);
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
         window.alert("Enviado")
    }
}
