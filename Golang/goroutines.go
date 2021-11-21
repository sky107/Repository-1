package main
import "fmt"
import "time"

func heavy(){
	for true { fmt.Println("Refreshed 1 seconds...");
	time.Sleep(time.Second*1);
 	}
}

func superHeavy(){
for true {
	fmt.Println("Refreshed 2 seconds");
	time.Sleep(time.Second*2);
}
}


func main(){
go heavy();
// Goroutine is attached with parent functions 
go superHeavy();

// Now the heavy() and superHeavy() will run in backgournd async without waiting for each other
fmt.Println("Printing on screen after 5 seconds");
select{} // listen main indefinately 
}
