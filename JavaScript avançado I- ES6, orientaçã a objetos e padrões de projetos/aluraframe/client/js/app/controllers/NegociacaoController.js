class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); // bind serve para manter a associação com do $ com o document.
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {

        event.preventDefault(); // Cancela o evento do botão

        let data = new Date(
            ...this._inputData.value
                .split('-') // Ele entende que esse array tem q ser desmembrado.
                .map((item, indice) => item - indice % 2) // Arrow function, mais informações no bloco de Anotações.
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
}