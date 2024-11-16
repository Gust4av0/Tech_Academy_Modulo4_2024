//3 - Crie uma função chamada filtrarNumeros que recebe um array com valores de tipos mistos (string, number, boolean) e retorna apenas os números. Use a tipagem correta para os parâmetros e retorno da função.
function filtrarNumeros(valores) {
    return valores.filter(function (valor) { return typeof valor === "number"; });
}
var mistos = [1, "Teste", true, 20, 55];
var numeros = filtrarNumeros(mistos);
console.log(numeros);
