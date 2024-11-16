//2 - Crie uma classe base "Funcionario" com os atributos nome e salario, e um método mostrarSalario. Crie uma classe derivada "Gerente" que tenha um método adicional para calcular e mostrar o bônus baseado no salário (salario do funcionario * 3).
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Funcionario = /** @class */ (function () {
    function Funcionario(nomeFuncionario, salarioFuncionario) {
        this.nome = nomeFuncionario;
        this.salario = salarioFuncionario;
    }
    Funcionario.prototype.mostrarSalario = function () {
        console.log("Sal\u00E1rio do Funcion\u00E1rio \u00E9: ".concat(this.salario));
    };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nomeGerente, salarioGerente) {
        return _super.call(this, nomeGerente, salarioGerente) || this;
    }
    Gerente.prototype.mostrarSalarioGerente = function () {
        var salarioGerente = this.salario * 3;
        console.log('Salário Gerente' + salarioGerente);
    };
    return Gerente;
}(Funcionario));
var gerente1 = new Gerente('Gustavo', 2000);
gerente1.mostrarSalario();
gerente1.mostrarSalarioGerente();
