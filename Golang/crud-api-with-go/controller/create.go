/* Author : Siddharth Kumar Yadav
22/11/2021
*/

package controller

import (
	"encoding/json"
	"firstapisky/structs"
	"fmt"
	"net/http"
)

func create() http.HandlerFunc {

	return func(w http.ResponseWriter, r *http.Request) {

		// var body []structs.Todo

		if r.Method == http.MethodPost {

			var tt structs.Todo

			decoder := json.NewDecoder(r.Body)

			// fmt.Println(te)

			err := decoder.Decode(&tt)
			if err != nil {
				panic(err)
			}

			_, et := db.Exec("INSERT INTO todos(name,todo) VALUES(?,?)", tt.Name, tt.Todo)

			if et != nil {
				fmt.Println(et)
				return
			} else {
				fmt.Println("Done")
			}

			data := structs.Response{
				Code: http.StatusOK,
				Body: tt,
			}
			// structs.Response
			w.WriteHeader(http.StatusCreated)
			json.NewEncoder(w).Encode(data)
		}
	}

}

//https://stackoverflow.com/questions/15672556/handling-json-post-request-in-go
