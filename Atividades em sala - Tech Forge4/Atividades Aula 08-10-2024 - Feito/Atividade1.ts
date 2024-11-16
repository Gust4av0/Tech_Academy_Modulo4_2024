//1 - Crie variáveis com os seguintes tipos: string, number, boolean e array. Faça uma função que receba dois números e retorne a soma. Dica: Use a tipagem explícita nos parâmetros da função.

class Atividade1{
    private nome: string;
    private numero: number;
    private booleano: boolean;
    private lista: string[];


    public retornarSoma(numero1:number, numero2: number){
        var soma = numero1 + numero2;
        console.log("A soma dos número é: " + soma);
    }
}


const atividade1 = new Atividade1;
atividade1.retornarSoma(10, 50);