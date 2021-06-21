const fs=require('fs');
const path=require('path');

const products=[];

module.exports= class Prodcut{
	constructor(title){
		this.title=title;
	}


	save(){

		const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');
		fs.readFile(p,(err,fileContent)=>{
			let products=[];
			if(!err){
				products=JSON.parse(fileContent);
			}

		products.push(this);
fs.writeFile(p,JSON.stringify(products),(err)=>{
	console.log(err);
})
		});

	}

	//async problem
	static fetchAll(){

		fs.readFile(p,(err,fileContent)=>{
			if(err){
				return [];
			}
			return JSON.parse(fileContent);
		})
		return this.products;
		
	}

}