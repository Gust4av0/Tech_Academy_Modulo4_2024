//Crie uma classe base "Veiculo" com os atributos marca e modelo, e um método detalhes. Crie uma classe derivada "Moto" que sobrescreva o método detalhes para incluir o número de cilindradas.

class Veiculo {
    private marca: string;
    private modelo: string;

    constructor(marca: string, modelo: string){
        this.marca = marca;
        this.modelo = modelo;
    }

    detalhes(){
        
    }
}

class Moto extends Veiculo {

}