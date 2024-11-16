type Computador = {
    armazenamento: number;
    memoriaRam: number;
    processador: string;
    gpu?: string;
    fonteW: number;
    ligar: () => void;

}

//Type é como a estrutura pode ser, sem inserir o valor.

const meuComputador: Computador = {
    armazenamento: 500,
    memoriaRam: 16,
    processador: "Intel Core i7-10100",
    fonteW: 650,
    ligar: () => {console.log("beep, computador ligou")}
}

console.log(meuComputador);
console.log(meuComputador.ligar());
console.log(meuComputador.processador);