//2 - Crie um type chamado Endereco que contenha os campos rua, número e cidade. Depois, crie uma função que recebe um objeto Endereco e retorne uma string formatada com as informações.
var Endereco = /** @class */ (function () {
    function Endereco(rua, numero, cidade) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
    }
    Endereco.prototype.formatarEndereco = function (endereco) {
        console.log("Rua: ".concat(endereco.rua, ", N\u00FAmero: ").concat(endereco.numero, ", Cidade: ").concat(endereco.cidade));
    };
    return Endereco;
}());
var primeiroEndereco = new Endereco("José Francisco da Silva", 376, "Campo Mourão");
primeiroEndereco.formatarEndereco(primeiroEndereco);
