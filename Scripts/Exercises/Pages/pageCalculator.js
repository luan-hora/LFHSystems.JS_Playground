var txtValor1;
var txtValor2;
var txtResultado;
var btnCalcular;
var rdOperacao;

var valor1;
var valor2;

initializeComponents();
prepareEventListeners();

function initializeComponents() {
    txtValor1 = document.getElementById('txtValor1');
    txtValor2 = document.getElementById('txtValor2');
    txtResultado = document.getElementById('txtResultado');
    btnCalcular = document.getElementById('btnCalcular');
}

function prepareEventListeners() {
    btnCalcular.addEventListener('click', calcular);
}

function calcular() {
    rdOperacao = document.querySelector('input[name="rdOperacao"]:checked');
    valor1 = txtValor1.value;
    valor2 = txtValor2.value;

    if (validaParametrosCalculo()) {
        var calc = new Calculator(eval(valor1), eval(valor2));
        var result = calc.realizarOperacao(rdOperacao.value);

        txtResultado.value = result;
    }
}

function validaParametrosCalculo() {
    var ret = true;
    var mensagensInconsistencia = [];

    if (rdOperacao == null || rdOperacao == undefined)
        mensagensInconsistencia.push('Não foi selecionada a operação para execução. <br>');

    if (valor1 == undefined || valor1 == '' || isNaN(valor1))
        mensagensInconsistencia.push('Valor informado no campo 1º valor não é válido. <br>');

    if (valor2 == undefined || valor2 == '' || isNaN(valor2))
        mensagensInconsistencia.push('Valor informado no campo 2º valor não é válido. <br>');

    if (mensagensInconsistencia.length > 0) {
        ret = false;
        Swal.fire({
            title: 'Error!',
            html: ('Alguns campos não foram preenchidos: <br>' + mensagensInconsistencia),
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }

    return ret;
}