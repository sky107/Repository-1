"use strict";
// Type script is a superste of Javascript
// Core types
// number ,string ,boolean ,object , array
var num1Element = document.getElementById('num1'); // all js code is supported in typescrip
var btnElement = document.querySelector('button'); // ignore null check we know it is that exists
function ad(num1, num2) {
    return num1 + num2;
}
btnElement.addEventListener('click', () => {
    const n1 = num1Element.value;
    const n2 = num1Element.value;
    const result = ad(+n1, +n2);
    console.log(result);
});
console.log(ad(3, 2));
