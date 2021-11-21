package main
import "fmt"
// concureny will make cpu utilize maximum  we need no idle time for cpu
// in one thread you can have multiple go-routines (light-weigth threads)

func main(){
		


	// lambda function

	func(){
	fmt.Println("We don't need this furuther");
	}();
}

