var botao = document.querySelector("#botao-incluir");

botao.addEventListener("click", function (event) {
    event.preventDefault();
    form = document.querySelector("form");
    negociacao = obtemDadosDoForm(form);
    negociacaoTr = montaTr(negociacao);
    adicionaNaTabela(negociacaoTr);
});

function obtemDadosDoForm (form) {
    var negociacao = {
        data: form.data.value,
        quantidade: form.quantidade.value,
        valor: form.valor.value
    };

    return negociacao;
}

function montaTr (negociacao) {
    negociacaoTr = document.createElement("tr");
    negociacaoTr.classList.add("negociacao");
    dataTd = montaTd(negociacao.data, "data");
    quantidadeTd = montaTd(negociacao.quantidade, "quantidade");
    valorTd = montaTd(negociacao.valor, "valor");

    negociacaoTr.appendChild(dataTd);
    negociacaoTr.appendChild(quantidadeTd);
    negociacaoTr.appendChild(valorTd);

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