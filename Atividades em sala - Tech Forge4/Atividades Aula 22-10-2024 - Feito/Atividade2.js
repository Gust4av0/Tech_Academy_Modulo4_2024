//2 - Crie uma classe Retangulo com os atributos largura (number) e altura (number). 
//Adicione métodos para calcular a área, o perímetro, e exibir as informações do retângulo. 
//A classe deve estar encapsulada
var Retangulo = /** @class */ (function () {
    function Retangulo(lRetangulo, aRetangulo) {
        this.largura = lRetangulo;
        this.altura = aRetangulo;
    }
    Retangulo.prototype.calcularArea = function (larguraRe, alturaR) {
        var area = (larguraRe * alturaR);
        console.log("A área é: " + area);
    };
    Retangulo.prototype.calcularPerimetro = function (larguraRe, alturaR) {
        var perimetro = 2 + (larguraRe + alturaR);
        console.log("O perímetro é: " + perimetro);
    };
    return Retangulo;
}());
var retangulo1 = new Retangulo(10, 5);
retangulo1.calcularArea(10, 5);
retangulo1.calcularPerimetro(10, 5);
