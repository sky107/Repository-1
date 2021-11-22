package controller

import (
	"encoding/json"
	"firstapisky/structs"
	"fmt"
	"net/http"
)

func get() http.HandlerFunc {

	return func(w http.ResponseWriter, r *http.Request) {

		var body []structs.Todo

		if r.Method == http.MethodGet {
			results, et := db.Query("SELECT * from todos")
			defer results.Close()
			if et != nil {
				fmt.Println(et)
			} else {

				for results.Next() {
					var tt structs.Todo

					et = results.Scan(&tt.Name, &tt.Todo)

					if et != nil {
						panic(et.Error()) // proper error handling instead of panic in your app
					}
					// and then print out the tag's Name attribute

					body = append(body, tt)
					fmt.Println(tt)

				}

			}
			data := structs.Response{
				Code: http.StatusOK,
				Body: body,
			}
			// structs.Response
			json.NewEncoder(w).Encode(data)
		}
	}
}
