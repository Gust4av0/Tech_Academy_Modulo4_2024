//Exemplo de Herança

class Pessoa {
    private nome: string;
    private idade: number;
    private sexo: string;


    constructor(nomeAluno: string, idadeAluno: number, sexoAluno: string){
        this.nome = nomeAluno;
        this.idade = idadeAluno;
        this.sexo = sexoAluno;
    }

    apresentar(){
        console.log(`Meu nome é: ${this.nome}, idade: ${this.idade} e meu sexo é: ${this.sexo}`);
    }
}

class Aluno extends Pessoa { //Utilizando este extends, estamos falando que a Classe Aluno, está estendendo a classe Pessoa, com os atributos e métodos dela.
    
    private ra: number;

    constructor(nomeAluno: string, idadeAluno: number, sexoAluno: string, raAluno: number){ // Precisamos passar o nome, idade e sexo, pq estamos pegando a classe Pessoa, utilizando o extends
        super(nomeAluno, idadeAluno, sexoAluno) // Chama o construtor da Classe pai, que no caso é a classe pessoa.
        this.ra = raAluno;
    }
}

class Professor extends Pessoa {
    private chapa: number;
    private disciplinas?: string[];

    constructor(nomeProfessor: string, idadeProfessor: number, sexoProfessor: string, chapaProfessor: number){
        super(nomeProfessor, idadeProfessor, sexoProfessor);
        this.chapa = chapaProfessor;
    }

    adicionarDisciplinas(disciplinasAdicionadas: string[]){
        this.disciplinas = disciplinasAdicionadas;
        console.log(`Disciplinas do Professor: ${this.disciplinas};`) 
    }
}

const alunoGustavo = new Aluno('Gustavo', 19, 'Masculino', 2310100);
alunoGustavo.apresentar();


const professorAntonio = new Professor('Antonio', 40, 'Masculino', 13456789);
professorAntonio.apresentar();
professorAntonio.adicionarDisciplinas(['Matemática', 'Artes'])
