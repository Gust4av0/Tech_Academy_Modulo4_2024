//3 - Crie uma classe Cidade com os atributos nome (string), população (number), área (number) e ano de fundação (number). 
//Adicione um método para calcular a densidade populacional (população / área), e outro método para
//calcular a idade da cidade. A classe deve estar encapsulada

class Cidade {

    private nome: string;
    private populacao: number;
    private area: number;
    private anoFundacao: number;

    constructor(nome: string, populacao: number, area: number){
        this.nome = nome;
        this.populacao = populacao;
        this.area = area;
    }

    public densidade (populacao: number, area: number){
        let densidadePopulacional = populacao / area;
        console.log(`A Densidade Populacional da Cidade: ${this.nome} é:` + densidadePopulacional);
    }

    public setIdade(ano: number){
        let anoAtual: number = 2024;
        this.anoFundacao = anoAtual - ano;
        console.log(`A idade da Cidade de: ${this.nome} é: ${this.anoFundacao}`);
        
    }

}

const campoMourao = new Cidade("Campo Mourão", 99432, 749637);
campoMourao.densidade(99432, 749637);
campoMourao.setIdade(1947);