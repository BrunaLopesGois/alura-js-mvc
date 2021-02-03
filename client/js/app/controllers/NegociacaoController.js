class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    adiciona (event) {
        event.preventDefault();

        let dataArray = this._inputData.value.split('-');
        let ano = dataArray[0];
        let mes = dataArray[1] - 1;
        let dia = dataArray[2];
        let data = new Date(ano, mes, dia);

        //código do instrutor
        // let data = new Date(
        //     ...this._inputData.value
        //         .split('-')
        //         .map((item, indice) => item - indice % 2)
        // );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
}