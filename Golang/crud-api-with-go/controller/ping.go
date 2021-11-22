package controller

import (
	"encoding/json"
	"firstapisky/structs"
	"net/http"
)

func ping() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// w.Write([]byte("hello wolrd"))
		// http.MethodGet==="GET" Remember
		if r.Method == http.MethodGet {
			data := structs.Response{
				Code: http.StatusOK,
				Body: "Yes you are connected ",
			}
			// structs.Response
			json.NewEncoder(w).Encode(data)

		}
	}
}
