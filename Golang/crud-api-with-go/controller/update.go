package controller

import (
	"encoding/json"
	"firstapisky/structs"
	"fmt"
	"net/http"
)

func update() http.HandlerFunc {

	return func(w http.ResponseWriter, r *http.Request) {

		// var body []structs.Todo

		if r.Method == http.MethodPut {

			var tt structs.Todo

			decoder := json.NewDecoder(r.Body)

			// fmt.Println(te)

			err := decoder.Decode(&tt)
			if err != nil {
				panic(err)
			}

			_, et := db.Exec("UPDATE todos SET name = ?, todo = ? where name =?", tt.Name, tt.Todo, tt.Name)

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
