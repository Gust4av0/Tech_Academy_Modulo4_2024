//2 - Crie um type chamado Endereco que contenha os campos rua, número e cidade. Depois, crie uma função que recebe um objeto Endereco e retorne uma string formatada com as informações.

class Endereco {
    public rua: string;
    public numero: number;
    public cidade: string;

    constructor(rua: string, numero: number, cidade: string){
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
    }

    public formatarEndereco(endereco: Endereco){
        console.log(`Rua: ${endereco.rua}, Número: ${endereco.numero}, Cidade: ${endereco.cidade}`);
    }
}

const primeiroEndereco = new Endereco("José Francisco da Silva", 376, "Campo Mourão");
primeiroEndereco.formatarEndereco(primeiroEndereco);