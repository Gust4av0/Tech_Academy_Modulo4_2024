//3 - Crie uma função chamada filtrarNumeros que recebe um array com valores de tipos mistos (string, number, boolean) e retorna apenas os números. Use a tipagem correta para os parâmetros e retorno da função.

function filtrarNumeros(valores: (string | number | boolean)[]): number[]{
    return valores.filter((valor) => typeof valor === "number");
}

const mistos = [1, "Teste", true, 20, 55];
const numeros = filtrarNumeros(mistos);
console.log(numeros);