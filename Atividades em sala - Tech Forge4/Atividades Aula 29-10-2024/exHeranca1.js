//1 - Crie uma classe base "Veiculo" com os atributos marca e modelo, e um método detalhes. Crie uma classe derivada "Moto" que herde a classe Veículo, tenha um atributo próprio chamado cilindradas e implemente o método “buzinar”.
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
var Veiculo = /** @class */ (function () {
    function Veiculo(marcaVeiculo, modeloVeiculo) {
        this.marca = marcaVeiculo;
        this.modelo = modeloVeiculo;
    }
    Veiculo.prototype.detalhesVeiculo = function () {
        console.log("A marca do ve\u00EDculo \u00E9: ".concat(this.marca, " e o modelo \u00E9: ").concat(this.modelo));
    };
    return Veiculo;
}());
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marcaMoto, modeloMoto, cilindradasMoto) {
        var _this = _super.call(this, marcaMoto, modeloMoto) || this;
        _this.cilindradas = cilindradasMoto;
        return _this;
    }
    Moto.prototype.buzinar = function () {
        console.log('BIIIIIIIIIIIIIIIIIIIII BIIIIIIIII');
    };
    return Moto;
}(Veiculo));
var moto1 = new Moto('Yamaha', 'MT-03', 321);
moto1.detalhesVeiculo();
moto1.buzinar();
