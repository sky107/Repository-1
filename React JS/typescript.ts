function printSomething<T>(param:T){
    return param;
}

printSomething<string>("Hello").split(' ');

console.log(printSomething<number>(1).toFixed(12));

console.log(printSomething("Hello ok"))