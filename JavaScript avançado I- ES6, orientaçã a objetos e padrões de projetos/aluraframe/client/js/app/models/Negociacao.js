class Negociacao {

    constructor(data, quantidade, valor){
        this._data =new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); // Congela o objeto, assim não conseguindo alterar suas propriedades depois desse ponto.
    }

    get volume(){ //Quando se cria o método dessa forma nos podemos acessa-lo como propriedade.
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}