//2 - Crie uma interface Funcionario com as propriedades nome, cargo, salario, e o método trabalhar(). Crie uma interface Gerente que herde de Funcionario e adicione o método supervisionar(). Implemente ambas as interfaces em classes concretas (FuncionarioComum e GerenteDeProjetos). Crie um array com funcionários de ambos os tipos e percorra-o, chamando os métodos adequados dependendo do tipo de funcioná

interface Funcionario {
    nome: string;
    cargo: string;
    salario: number;
    metodoTrabalhar(): void;
}

interface Gerente extends Funcionario{
    nome: string;
    cargo: string;
    salario: number;
    supervisionar(): void;
}

class FuncionarioComum implements Funcionario{
    public nome: string;
    public cargo: string;
    public salario: number;
    metodoTrabalhar(){
        
    }
}
class GerenteDeProjetos implements Gerente{
    public nome: string;
    public cargo: string;
    public salario: number;
    metodoTrabalhar(){
        
    }
    supervisionar(){
        
    }
}