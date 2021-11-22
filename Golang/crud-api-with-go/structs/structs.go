package structs

type Response struct {
	Code int         `json:"code"`
	Body interface{} `json:"body"`
}

type Todo struct {
	Name string `json:"name"`
	Todo string `json:"todo"`
}
