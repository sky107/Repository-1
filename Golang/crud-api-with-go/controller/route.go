/* Author : Siddharth Kumar Yadav
22/11/2021
*/
package controller

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
)

var db *sql.DB
var er error

func Register() *http.ServeMux {

	db, er = sql.Open("mysql", "sql6452629:p52EPpamTx@tcp(sql6.freemysqlhosting.net:3306)/sql6452629")

	if er != nil {
		log.Fatal(er)
	} else {
		fmt.Println("DB Connected")
	}

	mux := http.NewServeMux()
	mux.HandleFunc("/create", create())
	mux.HandleFunc("/ping", ping()) //since pkg controller hai then no need to import ping()
	mux.HandleFunc("/delete", delete())
	mux.HandleFunc("/update", update())
	mux.HandleFunc("/get", get())
	return mux
}
