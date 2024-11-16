//1 - Crie uma interface chamada Veiculo que tenha as seguintes propriedades: marca, modelo, e um método acelerar(velocidade: number):
//void. Em seguida, implemente essa interface em duas classes: Carro e Moto. Ambas as classes devem implementar a interface Veiculo.
var Carro = /** @class */ (function () {
    function Carro(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    Carro.prototype.acelerar = function (velocidade) {
        console.log("Velocidade do Carro é: ", velocidade);
    };
    ;
    return Carro;
}());
var Moto = /** @class */ (function () {
    function Moto(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    Moto.prototype.acelerar = function (velocidade) {
        console.log("Velocidade da Moto é: ", velocidade);
    };
    return Moto;
}());
var primeiroCarro = new Carro("Volks", "Fusca");
primeiroCarro.acelerar(100);
var primeiraMoto = new Moto("Yamaha", "MT-03");
primeiraMoto.acelerar(200);
