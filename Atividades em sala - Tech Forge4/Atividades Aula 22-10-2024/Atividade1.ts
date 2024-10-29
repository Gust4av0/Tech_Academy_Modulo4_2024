//1 - Crie uma classe Cachorro com os atributos nome (string), raça (string) e idade (number). Adicione um método
//que calcule a idade do cachorro em "anos de cachorro" (1 ano humano = 7 anos de cachorro).

class Cachorro {
    private nome: string;
    private raca: string;
    private idade: number;

    constructor(nomeCachorro: string, racaCachorro: string, idadeCachorro: number){
        this.nome = nomeCachorro;
        this.raca = racaCachorro;
        this.idade = idadeCachorro;
    }

    public calcularIdade(idadeCachorro: number){
        this.idade = (idadeCachorro * 7);
        return idadeCachorro;
    }
    
    public resultado(){
        console.log(`Nome cachorro: ${this.nome} \nRaça Cachorro: ${this.raca} \nIdade Cachorro: ${this.idade}`);
    }
}
const cachorro1 = new Cachorro("Tobby", "Pincher", 2);
cachorro1.calcularIdade(2);
cachorro1.resultado();

