//3 - Crie uma classe Cidade com os atributos nome (string), população (number), área (number) e ano de fundação (number). 
//Adicione um método para calcular a densidade populacional (população / área), e outro método para
//calcular a idade da cidade. A classe deve estar encapsulada
var Cidade = /** @class */ (function () {
    function Cidade(nome, populacao, area) {
        this.nome = nome;
        this.populacao = populacao;
        this.area = area;
    }
    Cidade.prototype.densidade = function (populacao, area) {
        var densidadePopulacional = populacao / area;
        console.log("A Densidade Populacional da Cidade: ".concat(this.nome, " \u00E9:") + densidadePopulacional);
    };
    Cidade.prototype.setIdade = function (ano) {
        var anoAtual = 2024;
        this.anoFundacao = anoAtual - ano;
        console.log("A idade da Cidade de: ".concat(this.nome, " \u00E9: ").concat(this.anoFundacao));
    };
    return Cidade;
}());
var campoMourao = new Cidade("Campo Mourão", 99432, 749637);
campoMourao.densidade(99432, 749637);
campoMourao.setIdade(1947);
