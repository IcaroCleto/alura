class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); // bind serve para manter a associação com do $ com o document.
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {

        event.preventDefault(); // Cancela o evento do botão

        let data = new Date(this._inputData.value.slipt('-'));
        console.log(data);

    }
}