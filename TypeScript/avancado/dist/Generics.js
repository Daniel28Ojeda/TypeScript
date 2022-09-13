"use strict";
// <T> deixa o tipo de dado como genérico. Aceita o primeiro tipo e vier e depois seta para aceitar apenas esse.
// Nesse caso o primeiro tipo q recebeu foi string, se mudar para number ele vai dar erro. Sem o <T> ele aceitaria a mudança do tipo
// A ltera dentro o <> pode ser qualquer uma q o resultado será o mesmo
class Pessoa {
    constructor(idade) {
        this.idade = idade;
    }
    setIdade(idade) {
        this.idade = idade;
    }
}
let pessoa = new Pessoa('Cinco');
console.log(`Idade: ${pessoa.idade}`);
let carros = ['gol', 'fiesta', 'palio'];
let numerosPrimos = [1, 3, 5];
function pegarPrimeiroElemento(lista) {
    return lista[0];
}
console.log(pegarPrimeiroElemento(carros));
console.log(pegarPrimeiroElemento(numerosPrimos));
//# sourceMappingURL=Generics.js.map