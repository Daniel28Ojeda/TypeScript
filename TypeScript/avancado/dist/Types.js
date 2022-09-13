"use strict";
function exibirPessoa(nome, idade) {
    console.log(`Nome: ${nome}, idade: ${idade}`);
}
exibirPessoa('Nami', 3);
exibirPessoa('Nami', 'três');
function exibirPessoa2(nome, idade) {
    console.log(`Nome: ${nome}, idade: ${idade}`);
}
exibirPessoa2('Juliana', 10);
exibirPessoa2('Juliana', 'dez');
function showStatus(status) {
    if (typeof status === 'number') {
        //if para poder acessar as propriedades caso venha informação do tipo number
        console.log(status.toExponential(2));
        console.log(`Status é number`);
    }
    else if (typeof status === 'boolean') {
        console.log(status.valueOf());
        console.log(`Status é boolean`);
    }
}
showStatus(2);
showStatus(true);
const PF = {
    nome: 'Daniel',
    cpf: '999999999'
};
const PJ = {
    nome: 'Empresa',
    cnpj: '111111111'
};
function showPessoa(pessoa) {
    if (pessoa.cpf) {
        console.log(`CPF: ${pessoa.cpf}`);
    }
    else {
        console.log(`CNPJ: ${pessoa.cnpj}`);
    }
}
// ou
function showPessoa2(pessoa) {
    if ('cpf' in pessoa) {
        console.log(`CPF: ${pessoa.cpf}`);
    }
    else {
        console.log(`CNPJ: ${pessoa.cnpj}`);
    }
}
showPessoa(PF);
showPessoa2(PJ);
//# sourceMappingURL=Types.js.map