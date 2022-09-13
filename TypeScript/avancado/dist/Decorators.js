"use strict";
//para trabalhar com decorators pimeir entrar no arq tsconfig.json
//tirar o comentario das linhas
//"experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
//"skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorators
//adiciona recursos a algo já existente
function setOS(os) {
    return (target) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.version = os;
            }
        };
    };
}
function minsize(size) {
    return (target, key) => {
        let val = target[key];
        const getter = () => val;
        const setter = (value) => {
            if (value < size) {
                console.log(`O valor da tela deve ser maior que ${size}"`);
            }
            else {
                val = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
class LG {
    constructor(size) {
        this.size = size;
    }
}
__decorate([
    minsize(32)
], LG.prototype, "size", void 0);
let Sony = class Sony {
};
Sony = __decorate([
    setOS('Android TV 2.1')
], Sony);
let TvLG = new LG(55);
console.log(TvLG);
console.log(`Tamanho da tela: ${TvLG.size}"`);
let TvSony = new Sony();
console.log(TvSony);
function delay(time) {
    return (target, key, descriptor) => {
        let method = descriptor.value;
        descriptor.value = function (...args) {
            setTimeout(() => {
                method.apply(this, args);
            }, time);
        };
        return descriptor;
    };
}
class Timer {
    showMsg() {
        console.log("Mensagem em 3s");
    }
    newTimer(cont) {
        if (cont === 0) {
            return 0;
        }
        else {
            console.log(`Contador em ${cont}`);
            return this.newTimer(cont - 1);
        }
    }
}
__decorate([
    delay(3000)
], Timer.prototype, "showMsg", null);
__decorate([
    delay(1000)
], Timer.prototype, "newTimer", null);
let t = new Timer();
t.showMsg();
t.newTimer(5);
//# sourceMappingURL=Decorators.js.map