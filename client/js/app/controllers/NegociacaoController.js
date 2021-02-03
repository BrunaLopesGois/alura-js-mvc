class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($("#negociacoesView"));

        this._negociacoesView.update(this._listaNegociacoes);
    }

    adiciona (event) {
        event.preventDefault();

        //código do instrutor
        // let data = new Date(
        //     ...this._inputData.value
        //         .split('-')
        //         .map((item, indice) => item - indice % 2)
        // );

        let negociacao = this._criaNegociacao();
        this._listaNegociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();
    }

    _criaNegociacao () {
        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value,
            this._calculaVolume(this._inputQuantidade, this._inputValor)
        );

        return negociacao;
    }

    _limpaFormulario () {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0;

        this._inputData.focus();
    }

    _calculaVolume(quantidade, valor) {
        return quantidade * valor;
    }
}