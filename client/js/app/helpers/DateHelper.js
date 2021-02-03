class DateHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instanciado');
    }

    static textoParaData (texto) {

        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('Deve estar no formato AAAA-mm-dd');

        let dataArray = texto.split('-');
        let ano = dataArray[0];
        let mes = dataArray[1] - 1;
        let dia = dataArray[2];
        let data = new Date(ano, mes, dia);

        return data;
    }

    static dataParaTexto (data) {
        let dia = data.getDate();
        let mes = data.getMonth() + 1;
        let ano = data.getFullYear();

        dia < 10 ? dia = '0' + dia : null;
        mes < 10 ? mes = '0' + mes : null;

        let texto = `${dia}/${mes}/${ano}`;

        return texto;
    }
}