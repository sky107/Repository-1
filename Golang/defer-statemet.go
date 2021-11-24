package main

import "fmt"



func main(){
	defer fmt.Println("1");
	defer fmt.Println("2");
	defer fmt.Println("3");
	
	fmt.Println("Siddharth");
	// So all defer imagine cut and paster at last of prgorms &  works on LIFO 
}
