package controller

import (
	"encoding/json"
	"firstapisky/structs"
	"fmt"
	"net/http"
)

func delete() http.HandlerFunc {

	return func(w http.ResponseWriter, r *http.Request) {

		// var body []structs.Todo

		if r.Method == http.MethodDelete {

			var tt structs.Todo

			decoder := json.NewDecoder(r.Body)

			// fmt.Println(te)

			err := decoder.Decode(&tt)
			if err != nil {
				panic(err)
			}

			_, et := db.Exec("DELETE FROM todos WHERE name=?", tt.Name)

			if et != nil {
				fmt.Println(et)
				return
			} else {
				fmt.Println("Done")
			}

			data := structs.Response{
				Code: http.StatusOK,
				Body: "Deleted",
			}
			// structs.Response
			w.WriteHeader(http.StatusAccepted)
			json.NewEncoder(w).Encode(data)
		}
	}

}

//https://golang.org/src/net/http/status.go
//https://stackoverflow.com/questions/15672556/handling-json-post-request-in-go
