type Idade = number | string;

function exibirPessoa(nome:string, idade:number | string){
    console.log(`Nome: ${nome}, idade: ${idade}`);
}

exibirPessoa('Nami', 3);
exibirPessoa('Nami', 'três');

function exibirPessoa2(nome:string, idade:Idade){
    console.log(`Nome: ${nome}, idade: ${idade}`);
}

exibirPessoa2('Juliana', 10);
exibirPessoa2('Juliana', 'dez');


function showStatus(status:boolean | number){
    if (typeof status === 'number') {
        //if para poder acessar as propriedades caso venha informação do tipo number
        console.log(status.toExponential(2));
        console.log(`Status é number`);
    }else if (typeof status === 'boolean'){
        console.log(status.valueOf());
        console.log(`Status é boolean`);
    }
}

showStatus(2);
showStatus(true);

type PessoaFisica = {
    nome:string;
    cpf:string;
}
type PessoaJuridica = {
    nome:string;
    cnpj:string;
}


const PF: PessoaFisica = {
    nome: 'Daniel',
    cpf: '999999999'
}
const PJ: PessoaJuridica = {
    nome: 'Empresa',
    cnpj: '111111111'
}

function showPessoa(pessoa: PessoaFisica | PessoaJuridica){
    if ((pessoa as PessoaFisica).cpf) {
        console.log(`CPF: ${(pessoa as PessoaFisica).cpf}`);
    } else {
        console.log(`CNPJ: ${(pessoa as PessoaJuridica).cnpj}`);
    }
}
// ou

function showPessoa2(pessoa: PessoaFisica | PessoaJuridica){
    if ('cpf' in pessoa) {
        console.log(`CPF: ${pessoa.cpf}`);
    } else {
        console.log(`CNPJ: ${pessoa.cnpj}`);
    }
}

showPessoa(PF);
showPessoa2(PJ);
