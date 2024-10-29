//2 - Crie uma classe Retangulo com os atributos largura (number) e altura (number). 
//Adicione métodos para calcular a área, o perímetro, e exibir as informações do retângulo. 
//A classe deve estar encapsulada


class Retangulo {

    private largura: number;
    private altura: number;

    constructor(lRetangulo: number, aRetangulo: number){
        this.largura = lRetangulo;
        this.altura = aRetangulo;
    }

    public calcularArea(larguraRe: number, alturaR: number){
        let area = (larguraRe * alturaR);
        console.log("A área é: " + area);
    }

    public calcularPerimetro(larguraRe: number, alturaR: number){
        let perimetro = 2 + (larguraRe + alturaR);
        console.log("O perímetro é: " + perimetro);
    }

}

const retangulo1 = new Retangulo(10, 5);
retangulo1.calcularArea(10,5);
retangulo1.calcularPerimetro(10,5);



