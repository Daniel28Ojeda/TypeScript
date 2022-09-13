import * as fs from 'fs';

var endereco: string = "Rua Teste";

fs.writeFile('arquivo.txt', endereco, (err)=>{
    if (err) {
        console.log(err);
    }
    console.log('Arquivo criado com sucesso!');
});