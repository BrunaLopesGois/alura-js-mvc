var botao = document.querySelector("#botao-incluir");

botao.addEventListener("click", function (event) {
    event.preventDefault();
    form = document.querySelector("form");
    negociacao = obtemDadosDoForm(form);
    negociacaoTr = montaTr(negociacao);
    var valido = validaDados(negociacao);
    if (valido)
        adicionaNaTabela(negociacaoTr);
    form.reset();
    form.data.focus();
});

function obtemDadosDoForm (form) {
    var negociacao = {
        data: form.data.value,
        quantidade: form.quantidade.value,
        valor: form.valor.value,
        volume: calculaVolume(form.quantidade.value, form.valor.value)
    };

    return negociacao;
}

function montaTr (negociacao) {
    negociacaoTr = document.createElement("tr");
    negociacaoTr.classList.add("negociacao");
    dataTd = montaTd(negociacao.data, "data");
    quantidadeTd = montaTd(negociacao.quantidade, "quantidade");
    valorTd = montaTd(negociacao.valor, "valor");
    volumeTd = montaTd(negociacao.volume, "volume");

    negociacaoTr.appendChild(dataTd);
    negociacaoTr.appendChild(quantidadeTd);
    negociacaoTr.appendChild(valorTd);
    negociacaoTr.appendChild(volumeTd);

    return negociacaoTr;
}

function montaTd (dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function adicionaNaTabela (negociacaoTr) {
    var tabela = document.querySelector("#tabela-negociacoes");
    tabela.appendChild(negociacaoTr);
}

function calculaVolume (quantidade, valor) {
    var volume = quantidade * valor;

    return volume;
}

function validaDados (negociacao) {
    if (!negociacao.data || negociacao.quantidade == 0 || negociacao.valor == 0) {
        return false;
    }
    return true;
}