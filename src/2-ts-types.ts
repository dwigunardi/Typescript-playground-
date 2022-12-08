/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
// type inference(Implicit)
let ti = 'hello';

// type annotation(Explicit)
let ta: string = 'hello ts';
const iniString:string = "Nah kan string"
const iniNumber:number = 23
const iniJugaNumber:number = 1.2 //float di anggap number
const iniArray:Array<string> = ["string doang"]
const iniArrayNumber:Array<number> = [1,2,3]

//convert data dari js ke ts
let a:undefined;                  // undefined
let b:boolean = true;           // boolean
let c:number = 1;              // number
let d:string = "hello";        // string
let e:bigint = 100n;           // big int (starting ES2020)
let f:symbol = Symbol("Sym");  // symbol  (starting ES2015)
let g:any = function () {   // function
  return null;
};
let n:() => void = function () {   // function explicit
    return null;
  };
let m:() => any = function () {   // function any = bebas
return "bebas";
};
let h:null = null;           // null ( special primitive )
let i:Record <string, unknown> = {};             // Object Literal
let l:Record <any, string> = {}                   // object literal
let o:Record<string, number> = {}  //advance object literal annotation
let j:Array<any> = [];             // array
let z:Array<any> = []          //array juga
let x:[] = []                  //array lebih simple
class Product {
  // class
  //...
}
let k:any = new Product();

function sum(a:number, b:number):number{
    return a + b
} 
console.log(sum(1,2))

//type union
let multi:string | number ;
multi = "bisa lah ini kan string"
multi = 123

//type aliases
type customeType = string | number | boolean
let myType:customeType;
myType = "string"
myType = 123
myType = true

let myFunction:(string | number | true | any);
myFunction = () =>{
    return 1
}
console.log(myFunction())