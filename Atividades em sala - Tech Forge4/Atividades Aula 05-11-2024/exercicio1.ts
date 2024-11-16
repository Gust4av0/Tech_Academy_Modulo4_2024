//1 - Crie uma interface chamada Veiculo que tenha as seguintes propriedades: marca, modelo, e um método acelerar(velocidade: number):
//void. Em seguida, implemente essa interface em duas classes: Carro e Moto. Ambas as classes devem implementar a interface Veiculo.

interface Veiculo {
    marca: string;
    modelo: string;
    acelerar(velocidade: number): void;
}

class Carro implements Veiculo {
    public marca: string;
    public modelo: string;

    constructor(marca: string, modelo: string){
        this.marca = marca;
        this.modelo = modelo;
    }
    acelerar(velocidade: number): void{
        console.log("Velocidade do Carro é: ", velocidade);
    };
}

class Moto implements Veiculo {
    public marca: string;
    public modelo: string;

    constructor(marca: string, modelo: string){
        this.marca = marca;
        this.modelo = modelo;
    }
    acelerar(velocidade: number): void {
        console.log("Velocidade da Moto é: ", velocidade);
    }
}

const primeiroCarro = new Carro("Volks", "Fusca");
primeiroCarro.acelerar(100);
const primeiraMoto = new Moto("Yamaha", "MT-03");
primeiraMoto.acelerar(200);