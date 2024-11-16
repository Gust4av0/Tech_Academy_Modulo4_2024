//Exemplo de Polimorfismo

class Pessoa {
    protected nome: string;
    protected idade: number;
    private endereco: string;

    constructor(nomePessoa: string, idadePessoa: number, enderecoPessoa: string){
        this.nome = nomePessoa;
        this.idade = idadePessoa;
        this.endereco = enderecoPessoa;
    }

    public apresentar(){
        console.log(`Nome ${this.nome}, idade: ${this.idade}`);
    }

    public apresentarEndereco(){
        console.log(`Endereço: ${this.endereco}`);
    }
}

class Aluno extends Pessoa{
    private ra: number;

    constructor(nomeAluno: string, idadeAluno: number, enderecoAluno: string, raAluno: number){
        super(nomeAluno, idadeAluno, enderecoAluno);
        this.ra = raAluno; 
    }

    public apresentar(){
        console.log(`RA do Aluno é: ${this.ra}`);
    }
}

const pessoa1 = new Pessoa('Joao', 24, 'Rua 1234');
pessoa1.apresentar();

const aluno1 = new Aluno('Gustavo', 19, 'Rua 5467', 2310100);
aluno1.apresentar();
aluno1.apresentarEndereco();