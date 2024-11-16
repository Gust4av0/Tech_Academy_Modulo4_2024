//1 - Crie variáveis com os seguintes tipos: string, number, boolean e array. Faça uma função que receba dois números e retorne a soma. Dica: Use a tipagem explícita nos parâmetros da função.
var Atividade1 = /** @class */ (function () {
    function Atividade1() {
    }
    Atividade1.prototype.retornarSoma = function (numero1, numero2) {
        var soma = numero1 + numero2;
        console.log("A soma dos número é: " + soma);
    };
    return Atividade1;
}());
var atividade1 = new Atividade1;
atividade1.retornarSoma(10, 50);
