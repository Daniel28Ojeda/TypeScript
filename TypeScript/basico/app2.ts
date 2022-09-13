import { createScanner } from "./node_modules/typescript/lib/typescript";

let testeNome: string;
let testeIdade: number;
let maiorIdade: boolean;

testeNome = 'Nami';
testeIdade = 3;
maiorIdade = false;

console.log(`Nome: ${testeNome}, Idade: ${testeIdade}, Maior de Idade: ${maiorIdade}`);

function soma(a:number, b:number){
    return a+b;
}
//----------------------------------------------------------
//Array

//trabalhando com array
let a: number[] = [];
a.push(1);
a.push(3);
console.log(a);

let b: number[] = [1,2,3];
console.log(b);

//array de 2 tipos de dados
let c: (number | string)[] = [1,2,3,"Texto"];
c.push(4);
c.push('Teste');
console.log(c);

//----------------------------------------------------------
//Type

//array com restrição
//exemplo só aceita números ou o texto específico "Nami"
let d: (number | "Nami")[] = [1,2,3,"Nami"];
d.push(4);

//declaração de tipos para reutilização futura
type tipoArray = (number | string)[];

let e: tipoArray = [1,2,3,"texto1"];

type Animal = {
    nome: string;
    idade?: number;
    // ? indica opcional
}

let cachorro: Animal;
cachorro = {
    nome: 'Totó',
    idade: 2
}

console.log(cachorro);

//----------------------------------------------------------
//Enum

enum produtoStatus{
    Ativo = 1,
    Inativo = 2,
    Indisponivel = 3
}

function checarProdutoStatus(status: number){
    switch (status){
        case produtoStatus.Ativo:
            console.log('Produto disponível');
            break;
        case produtoStatus.Inativo:
            console.log('Produto não encontrado');
            break;
        case produtoStatus.Indisponivel:
            console.log('Produto aguardando estoque');
            break;
    }
}

checarProdutoStatus(produtoStatus.Ativo);

//----------------------------------------------------------
//Interface

//Contrato que obriga o objeto a implementar a estrutura da interface
interface IAnimal{
    nome: string;
    idade: number;
    estaVivo: boolean;

    nascer(): void;
    crescer(): void;
    morrer(): void;
}

let gato: IAnimal = {
    nome: 'Ace',
    idade: 0,
    estaVivo: false,

    nascer(){
        this.estaVivo = true;
        console.log(`O ${this.nome} nasceu!`);
    },

    crescer(){
        this.idade++;
        console.log(`O ${this.nome} cresceu. Agora tem ${this.idade} anos.`);
    },

    morrer(){
        this.estaVivo = false;
        console.log(`O ${this.nome} morreu com ${this.idade} anos. =(`);
    }
}

gato.nascer();
gato.crescer();
gato.crescer();
gato.crescer();
gato.morrer();

//----------------------------------------------------------
//Classes

class EAnimal implements IAnimal{
    readonly nome: string; //não permite a mudança do nome após a criação do objeto
    idade: number;
    private _estaVivo: boolean; //não permite acessar diretamente, só por meio de funções já criadas
    //protected no lugar do private permite o acesso nas classes filhas

    get estaVivo(): boolean{
        return this._estaVivo;
    }
    set estaVivo(status: boolean){
        this._estaVivo = status;
    }

    constructor(nome: string ){
        this.nome = nome;
        this.idade = 0;
        this._estaVivo = false;
    }

    nascer(){
        this._estaVivo = true;
        console.log(`O ${this.nome} nasceu!`);
    };

    crescer(){
        this.idade++;
        console.log(`O ${this.nome} cresceu. Agora tem ${this.idade} anos.`);
    };

    morrer(){
        this._estaVivo = false;
        console.log(`O ${this.nome} morreu com ${this.idade} anos. =(`);
    };   
}

let Passaro = new EAnimal('Piu-piu');
Passaro.nascer();
Passaro.crescer();
Passaro.morrer();


//----------------------------------------------------------
//Namespaces

namespace Terrestres{
    export class Coelho extends EAnimal{
        correr(){
            console.log(`O ${this.nome} correu.`);
        }
    } 
}

namespace Marinhos{
    export class Peixe extends EAnimal{
        nadar(){
            console.log(`O ${this.nome} nadou.`);
        }
    }
}

let pernaLonga = new Terrestres.Coelho('Perninha');
let golfinho = new Marinhos.Peixe(`Nemo`);

pernaLonga.correr();
golfinho.nadar();

//----------------------------------------------------------
//Declarations

import calc from "./calc.js";

console.log(calc.soma(20,10));
console.log(calc.sub(20,10));
