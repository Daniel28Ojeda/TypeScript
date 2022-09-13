// <T> deixa o tipo de dado como genérico. Aceita o primeiro tipo e vier e depois seta para aceitar apenas esse.
// Nesse caso o primeiro tipo q recebeu foi string, se mudar para number ele vai dar erro. Sem o <T> ele aceitaria a mudança do tipo
// A ltera dentro o <> pode ser qualquer uma q o resultado será o mesmo

class Pessoa<T>{
    idade: T;
    
    constructor(idade: T){
        this.idade = idade;
    }

    setIdade(idade: T){
        this.idade = idade;
    }
}

let pessoa = new Pessoa('Cinco');
console.log(`Idade: ${pessoa.idade}`);


let carros: string[] = ['gol', 'fiesta', 'palio'];
let numerosPrimos: number[] = [1,3,5];

function pegarPrimeiroElemento<I>(lista: I[]): I{
    return lista[0]
}

console.log(pegarPrimeiroElemento(carros)); 
console.log(pegarPrimeiroElemento(numerosPrimos)); 

