
package main
import "fmt"

func main(){
	fmt.Println("hello world");
	// if else for switch , but not while loop
	f:=true;
	flag:=&f;
	if flag==nil{
		fmt.Println("memory not allocated")
	}else if *flag{
		fmt.Println("True");
	}else {
		fmt.Println("False");
	}
			
	for i:=0;i<10;i++{
		fmt.Println("Hi");
	}
	//var arr []string ;
	arr:=[]string{"siddharth","kumar","yadav"}
	
	for i,val:=range arr{
		fmt.Println(i);
		fmt.Println(val);
	}
	
	day :="Fri";
	switch day{
	case "Fri"	:
		fmt.Println("Friday");
	case "Tue","Thr":
		fmt.Println("No eggs");
	default:
		fmt.Println("Free day");
	}

	// you should use switch statements in  error handling
	//err := errors.New("Hfasdfjsdaf");
	//switch err {
	//	case
	//}
	

}
