import "http/net"


func(w http.ResponseWriter, r *http.Request) {

		if r.Method == http.MethodGet {
			data := Response{
				Code: http.StatusOK,
				Body: "sid",
			}
			// structs.Response
			json.NewEncoder(w).Encode(data)

		}
	}