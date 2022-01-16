// Type script is a superste of Javascript
// Core types
// number ,string ,boolean ,object , array
// to generate config files use command tsc ==init
// if you want to compile all files inside folder then simply run tsc config file will take care of everything, no file name after that


var num1Element=document.getElementById('num1') as HTMLInputElement // all js code is supported in typescrip
var btnElement=document.querySelector('button')!; // ignore null check we know it is that exists


function ad(num1:number | string, num2:number | string){
    return num1 + num2;
}

btnElement.addEventListener('click',()=>{
    const n1=num1Element.value;
    const n2=num1Element.value;
    const result=ad(+n1,+n2);
    console.log(result);

})

console.log(ad(3,2));