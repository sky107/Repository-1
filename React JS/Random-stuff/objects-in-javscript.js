const obj={
    name:'sky',
    age:12,
    address:{
        pinCode:121212,
        state:'MP'
    }
}

for(const key in obj){
    console.log(key);
    if(key=='address'){
        console.warn(obj[key].pinCode)
    }
}


const person={
    name:'sky',
    hobbies:['Cooking','Sports'],
    address:{
        zipCode:123,
        state:'MP'
    }
}

const anotherPerson=person // since objects are references so if any change made in person will reflect i anotherPerson as well

person.address.state='Maharashtra'
person.hobbies[1]='Changed hobbby';
console.log(anotherPerson)

const person2={...person}
// now person2 is shallow copy of person, key changes will affect, but 
// array will be referenced and  any chnage in array push of person 
// will reflect in person2


const person3={...person,hobbies:[...person.hobbies,'Hello']}
person.hobbies.pop();
console.log(person3);




//
const person22=Object.assign({},person,) // simlar to spread opeartor , alternative

// fast way to chec in object
if('age' in person){
    console.log("OK")
}