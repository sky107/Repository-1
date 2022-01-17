// Type script is a superste of Javascript
// Core types
// number ,string ,boolean ,object , array
// to generate config files use command tsc --init
// if you want to compile all files inside folder then simply run tsc config file will take care of everything, no file name after that

type NumberOrString = number | string;
type Result = {val :number; timeStamp:Date};
// type and interface both are same funcionality
interface ResultObj {
    val:number,
    timeStamp:Date
}
const newArray:Array<string>=[];


var num1Element=document.getElementById('num1') as HTMLInputElement // all js code is supported in typescrip
var btnElement=document.querySelector('button')!; // ignore null check we know it is that exists


function ad(num1:number | string, num2:number | string){
    if ( typeof num1==='number' && typeof num2==='number')
    return num1 + num2;
    else if( typeof num1==='string' && typeof num2==='string'){
        return num1+' '+num2;
    }else{
        return +num1 + +num2;
    }
}

btnElement.addEventListener('click',()=>{
    const n1=num1Element.value;
    const n2=num1Element.value;
    const result=ad(+n1,+n2);
    console.log(result);

})

console.log(ad(3,2));


function printResult(resultObj:Result){
    console.log(resultObj.val)
}

const  numResult: number[] =[];
const textResult: number[]=[];

var testNum=12;

textResult.push(testNum as number);

// Generic Types
 // in promises its availbe to declare the string
const myPromise=new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve('It worked')
    },1000);
})

myPromise.then((result)=>{
    console.log(result.split('w'));
})

