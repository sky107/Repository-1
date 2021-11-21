package main

//import "fmt"
import (
	"fmt"
)

// Data encapsulation implementation using struct

type Car struct {
	Name    string
	Age     int
	ModelNo int
}

func (c Car) Print() {
	fmt.Println(c)
}

// with return type
func (c Car) Drive() {
	fmt.Println("Driving...")
}

func main() {
	//var score int=4
	var batman string = "I am batman"

	fmt.Println(batman)
	var superman string
	superman = "I am superman"
	// If you are allocating then use else memoery reliable:)
	fmt.Println(superman)
	var a, b string = "A", "B"
	// Default Value of int =0 , string =""

	var (
		spiderman = "Iam spiderman"
		age       = 18
		powers    = "web slings"
		antman    = "Im antman"
	)

	fmt.Println(a, b)
	fmt.Println(antman, spiderman, age, powers)

	// Taking Input
	var s string
	fmt.Scanln(&s)
	fmt.Println(s)

	//Arrays

	var arr []int
	arr = append(arr, 1, 2, 3, 3, 4)
	fmt.Println(arr)

	ca := Car{
		Name:    "audi",
		Age:     12,
		ModelNo: 2}

	// var scorpio Car{}:This is wrong

	sc := Car{"sc", 3, 4}
	fmt.Println(sc)
	// var scorpio Car {"scorp",2,4}

	// fmt.Println(scorpio)
	ca.Print()
	ca.Drive()

}
