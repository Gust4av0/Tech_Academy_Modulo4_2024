var CarroChevete = /** @class */ (function () {
    function CarroChevete(marcaChevete, pecasModificasChevete, tracaoTrazeiraChevete) {
        this.marca = marcaChevete;
        this.pecasModificas = pecasModificasChevete;
        this.tracaoTrazeira = tracaoTrazeiraChevete;
    }
    CarroChevete.prototype.podeTurbinar = function () {
        var carroPodeTurbinar = this.pecasModificas.includes("turbao");
        return carroPodeTurbinar;
    };
    return CarroChevete;
}());
var primeiroCarro = new CarroChevete("Chevrolet", ["Full Tech", "turbao"], true);
var podeTurbinar = primeiroCarro.podeTurbinar();
console.log("Primeiro carro pode turbinar? ", podeTurbinar);
