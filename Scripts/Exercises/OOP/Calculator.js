class Calculator {
    constructor(valor1, valor2) {
        this.Valor1 = valor1;
        this.Valor2 = valor2;
        this.Resultado = 0;
    }

    realizarOperacao(operador) {
        var resultadoOperacao;
        switch (operador) {
            case '+':
                resultadoOperacao = this.Valor1 + this.Valor2;
                break;
            case '-':
                resultadoOperacao = this.Valor1 - this.Valor2;
                break;
            case '/':
                resultadoOperacao = this.Valor1 / this.Valor2;
                break;
            case '*':
                resultadoOperacao = this.Valor1 * this.Valor2;
                break;
        }

        this.Resultado = resultadoOperacao;
        return this.Resultado;
    }
}