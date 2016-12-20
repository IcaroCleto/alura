class MensagemView extends View {
    constructor(elemento){
        super(elemento); // Passa para o construtor da classe pai
    }

    template(model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }
}