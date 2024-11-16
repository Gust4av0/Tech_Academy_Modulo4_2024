//1 - Crie uma classe Cachorro com os atributos nome (string), raça (string) e idade (number). Adicione um método
//que calcule a idade do cachorro em "anos de cachorro" (1 ano humano = 7 anos de cachorro).
var Cachorro = /** @class */ (function () {
    function Cachorro(nomeCachorro, racaCachorro, idadeCachorro) {
        this.nome = nomeCachorro;
        this.raca = racaCachorro;
        this.idade = idadeCachorro;
    }
    Cachorro.prototype.calcularIdade = function (idadeCachorro) {
        this.idade = (idadeCachorro * 7);
        return idadeCachorro;
    };
    Cachorro.prototype.resultado = function () {
        console.log("Nome cachorro: ".concat(this.nome, " \nRa\u00E7a Cachorro: ").concat(this.raca, " \nIdade Cachorro: ").concat(this.idade));
    };
    return Cachorro;
}());
var cachorro1 = new Cachorro("Tobby", "Pincher", 2);
cachorro1.calcularIdade(2);
cachorro1.resultado();
