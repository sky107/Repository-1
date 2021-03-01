/*
Coded by Siddharth Kumar Yadav
Title : URLSearch Params is a great way to send /get data from a API End point
by making ease to construct the Query string in GET/POST format which reduces effort
and increases accuracy.
*/

const usp=new URLSearchParams({
name:'sidharth',
course:'Computer Science and Engineering',
password:'Software Developer'
});

for(const [key,value] of usp){
console.log(`${key} <-=-> ${value}`);
}
 
console.log(usp);  /* This will return an object */
console.log(usp.toString());  /*this will return the required header format by performing conversion */

usp.set('name','Siddharth Kumar Yadav');
console.log(usp.get('name'));



/* Method 1 */
fetch(`search.php?${usp.toString()}`)

/* Method 2 */
fetch('search.php',{method:'post',body:usp})
.then(res=>console.log(res.json()));


