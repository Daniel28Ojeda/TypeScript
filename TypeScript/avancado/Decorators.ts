//para trabalhar com decorators pimeir entrar no arq tsconfig.json
//tirar o comentario das linhas
//"experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
//"skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */

//Decorators
//adiciona recursos a algo já existente

function setOS(os: string){
    return (target: any) => {
        return class extends target{
            version = os;
        }
    }
}

function minsize(size: number){
    return (target: any, key: any) => {
        let val = target[key];

        const getter = () => val;
        const setter = (value: number) => {
            if (value < size) {
                console.log(`O valor da tela deve ser maior que ${size}"`);
            } else {
                val = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    }
}

class LG{
    @minsize(32)
    size:number;

    constructor(size:number){
        this.size = size;
    }
}

@setOS('Android TV 2.1')
class Sony{

}

let TvLG = new LG(55);
console.log(TvLG);
console.log(`Tamanho da tela: ${TvLG.size}"`);

let TvSony = new Sony();
console.log(TvSony);



function delay(time: number){
    return (target: any, key: string, descriptor: PropertyDescriptor) =>{
        let method = descriptor.value;

        descriptor.value = function(...args: any) {
            setTimeout(() =>{
                method.apply(this, args);
            }, time);
        }

        return descriptor;
    }
}

class Timer{

    @delay(3000)
    showMsg(){
        console.log("Mensagem em 3s");
    }

    @delay(1000)
    newTimer(cont: number):number{
        if (cont === 0) {
            return 0;
        }else{
            console.log(`Contador em ${cont}`);
            return this.newTimer(cont -1);
        }
    }
}

let t = new Timer();
t.showMsg();
t.newTimer(5);