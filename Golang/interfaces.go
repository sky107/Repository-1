package main
import "fmt"


type Car interface{
Drive()
Stop()
}

type Lambo struct{
LamboModel string
}

type Chevy struct{
ChevyModel string
}

func (l *Lambo) Drive(){
fmt.Println("Lambo on move")
fmt.Println(l.LamboModel)
}
func (c *Chevy) Drive(){
fmt.Println("Chevy on move")
fmt.Println(c.ChevyModel)
}
func (l *Lambo) Stop(){
fmt.Println("Stopping");
}

// Returning a struct
func NewModel(arg string) Car{
return &Lambo{arg};
}

func main(){
l:=Lambo{"Gallardo"}
c:=Chevy{"C3434"}
d:=NewModel("Jeep")
l.Drive();
c.Drive();
d.Drive();

}




