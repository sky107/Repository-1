package main

import (
	"encoding/json"
	"net/http"
)

type Response struct {
	Code int         `json:"code"`
	Body interface{} `json:"body"`
}

func main() {
	mux := http.NewServeMux()
	//mux is a simple multiplexer
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// w.Write([]byte("hello wolrd"))
		// http.MethodGet==="GET" Remember
		if r.Method == http.MethodGet {
			data := Response{
				Code: http.StatusOK,
				Body: "sid",
			}
			// structs.Response
			json.NewEncoder(w).Encode(data)

		}
	})

	http.ListenAndServe(":8000", mux)
	// mux is a router  or we can call multiplexer
	//this second argument is called handler
}
