//Type é como a estrutura pode ser, sem inserir o valor.
var meuComputador = {
    armazenamento: 500,
    memoriaRam: 16,
    processador: "Intel Core i7-10100",
    fonteW: 650,
    ligar: function () { console.log("beep, computador ligou"); }
};
console.log(meuComputador);
console.log(meuComputador.ligar());
console.log(meuComputador.processador);
