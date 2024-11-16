//3 - Crie uma classe base "Conta" com os atributos titular e saldo. Crie classes derivadas "ContaCorrente" e "ContaPoupanca", onde:
//ContaCorrente: tem uma taxa de operação que é descontada no saldo.
//ContaPoupanca: tem um método para calcular os juros.

class Conta {
    private titular: string;
    private saldo: number;

    constructor(nomeTitular: string, saldoTitular: number){
        this.titular = nomeTitular;
        this.saldo = saldoTitular;
    }
}

class ContaCorrente extends Conta{
    
}

class ContaPoupanca extends Conta{
    
}