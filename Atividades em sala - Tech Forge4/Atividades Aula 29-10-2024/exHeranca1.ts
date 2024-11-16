//1 - Crie uma classe base "Veiculo" com os atributos marca e modelo, e um método detalhes. Crie uma classe derivada "Moto" que herde a classe Veículo, tenha um atributo próprio chamado cilindradas e implemente o método “buzinar”.

class Veiculo {
    private marca: string;
    private modelo: string;

    constructor(marcaVeiculo: string, modeloVeiculo: string){
        this.marca = marcaVeiculo;
        this.modelo = modeloVeiculo;
    }

    detalhesVeiculo(){
        console.log(`A marca do veículo é: ${this.marca} e o modelo é: ${this.modelo}`);
    }
}

class Moto extends Veiculo{
    private cilindradas: number;

    constructor(marcaMoto: string, modeloMoto: string, cilindradasMoto: number){
        super(marcaMoto, modeloMoto);
        this.cilindradas = cilindradasMoto;
    }

    buzinar(){
        console.log('BIIIIIIIIIIIIIIIIIIIII BIIIIIIIII');
    }
}

const moto1 = new Moto('Yamaha', 'MT-03', 321);
moto1.detalhesVeiculo();
moto1.buzinar();