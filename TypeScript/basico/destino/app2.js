let testeNome;
let testeIdade;
let maiorIdade;
testeNome = 'Nami';
testeIdade = 3;
maiorIdade = false;
console.log(`Nome: ${testeNome}, Idade: ${testeIdade}, Maior de Idade: ${maiorIdade}`);
function soma(a, b) {
    return a + b;
}
//----------------------------------------------------------
//Array
//trabalhando com array
let a = [];
a.push(1);
a.push(3);
console.log(a);
let b = [1, 2, 3];
console.log(b);
//array de 2 tipos de dados
let c = [1, 2, 3, "Texto"];
c.push(4);
c.push('Teste');
console.log(c);
//----------------------------------------------------------
//Type
//array com restrição
//exemplo só aceita números ou o texto específico "Nami"
let d = [1, 2, 3, "Nami"];
d.push(4);
let e = [1, 2, 3, "texto1"];
let cachorro;
cachorro = {
    nome: 'Totó',
    idade: 2
};
console.log(cachorro);
//----------------------------------------------------------
//Enum
var produtoStatus;
(function (produtoStatus) {
    produtoStatus[produtoStatus["Ativo"] = 1] = "Ativo";
    produtoStatus[produtoStatus["Inativo"] = 2] = "Inativo";
    produtoStatus[produtoStatus["Indisponivel"] = 3] = "Indisponivel";
})(produtoStatus || (produtoStatus = {}));
function checarProdutoStatus(status) {
    switch (status) {
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
let gato = {
    nome: 'Ace',
    idade: 0,
    estaVivo: false,
    nascer() {
        this.estaVivo = true;
        console.log(`O ${this.nome} nasceu!`);
    },
    crescer() {
        this.idade++;
        console.log(`O ${this.nome} cresceu. Agora tem ${this.idade} anos.`);
    },
    morrer() {
        this.estaVivo = false;
        console.log(`O ${this.nome} morreu com ${this.idade} anos. =(`);
    }
};
gato.nascer();
gato.crescer();
gato.crescer();
gato.crescer();
gato.morrer();
//----------------------------------------------------------
//Classes
class EAnimal {
    constructor(nome) {
        this.nome = nome;
        this.idade = 0;
        this._estaVivo = false;
    }
    //protected no lugar do private permite o acesso nas classes filhas
    get estaVivo() {
        return this._estaVivo;
    }
    set estaVivo(status) {
        this._estaVivo = status;
    }
    nascer() {
        this._estaVivo = true;
        console.log(`O ${this.nome} nasceu!`);
    }
    ;
    crescer() {
        this.idade++;
        console.log(`O ${this.nome} cresceu. Agora tem ${this.idade} anos.`);
    }
    ;
    morrer() {
        this._estaVivo = false;
        console.log(`O ${this.nome} morreu com ${this.idade} anos. =(`);
    }
    ;
}
let Passaro = new EAnimal('Piu-piu');
Passaro.nascer();
Passaro.crescer();
Passaro.morrer();
//----------------------------------------------------------
//Namespaces
var Terrestres;
(function (Terrestres) {
    class Coelho extends EAnimal {
        correr() {
            console.log(`O ${this.nome} correu.`);
        }
    }
    Terrestres.Coelho = Coelho;
})(Terrestres || (Terrestres = {}));
var Marinhos;
(function (Marinhos) {
    class Peixe extends EAnimal {
        nadar() {
            console.log(`O ${this.nome} nadou.`);
        }
    }
    Marinhos.Peixe = Peixe;
})(Marinhos || (Marinhos = {}));
let pernaLonga = new Terrestres.Coelho('Perninha');
let golfinho = new Marinhos.Peixe(`Nemo`);
pernaLonga.correr();
golfinho.nadar();
//----------------------------------------------------------
//Declarations
import calc from "./calc.js";
console.log(calc.soma(20, 10));
console.log(calc.sub(20, 10));
