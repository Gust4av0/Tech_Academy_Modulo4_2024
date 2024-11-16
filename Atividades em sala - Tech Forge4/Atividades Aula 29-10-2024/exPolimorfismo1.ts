//1 - Crie uma classe base "Veiculo" com os atributos marca e modelo, e um método detalhes. Crie uma classe derivada "Moto" que sobrescreva o método detalhes para incluir o número de cilindradas.

class Veiculo {
    protected marca: string;
    protected modelo: string;

    constructor(marcaVeiculo: string, modeloVeiculo: string){
        this.marca = marcaVeiculo;
        this.modelo = modeloVeiculo;
    }

    public detalhes(){
        console.log(`Marca do Veículo: ${this.marca} e Modelo do Veículo: ${this.modelo}`);
    }
}

class Moto extends Veiculo{
    private cilindradas: number;

    constructor(marcaMoto: string, modeloMoto: string, cilindradasMoto: number){
        super(marcaMoto, modeloMoto);
        this.cilindradas = cilindradasMoto;
    }
}