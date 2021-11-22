package main

import (
	"firstapisky/controller"
	"fmt"
	_ "github.com/go-sql-driver/mysql" //  ADD THIS IMPLICITELY , AFTER INSTALLATION of comand go get -u "<URL>"
	"net/http"
)

// to import struct from another folder you need to go mod init testapi
// and then auto-import will be handled by sublime text

func main() {

	mux := controller.Register()

	fmt.Println("Server Online at localhost:8888")
	e := http.ListenAndServe(":8888", mux)
	if e != nil {
		panic(e)
	}

	// mux is a router  or we can call multiplexer
	//this second argument is called handler
}

// Go to Windows Defender Firewall, in Left side menu you saw Inbound Rules click there, then Right Side menu you will see New Rule... click.
// Choose Port opened from window -> Next Select TCP, then define which ports you want I choose 8080 click Next again, Choose Allow the connection Next, Check All Next, Give any Name Goland or anything you want and press Finish. Thats it

//https://golang.org/src/net/http/status.go
//https://stackoverflow.com/questions/15672556/handling-json-post-request-in-go
