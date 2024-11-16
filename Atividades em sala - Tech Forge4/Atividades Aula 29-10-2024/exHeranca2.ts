//2 - Crie uma classe base "Funcionario" com os atributos nome e salario, e um método mostrarSalario. Crie uma classe derivada "Gerente" que tenha um método adicional para calcular e mostrar o bônus baseado no salário (salario do funcionario * 3).


class Funcionario{
    private nome: string;
    protected salario: number;

    constructor(nomeFuncionario: string, salarioFuncionario: number){
        this.nome = nomeFuncionario;
        this.salario = salarioFuncionario;
    }

    mostrarSalario(){
        console.log(`Salário do Funcionário é: ${this.salario}`);
    }
}

class Gerente extends Funcionario{

    constructor(nomeGerente: string, salarioGerente: number){
        super(nomeGerente, salarioGerente);
    }

    public mostrarSalarioGerente(){
        const salarioGerente = this.salario * 3;
        console.log('Salário Gerente: ' + salarioGerente);
    }
}

const gerente1 = new Gerente('Gustavo', 2000);
gerente1.mostrarSalario();
gerente1.mostrarSalarioGerente();