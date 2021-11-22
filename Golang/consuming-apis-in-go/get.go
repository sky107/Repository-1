/*
Author : Siddharth Kumar Yadav
22/11/2021
*/
package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

type PokemonSpecies struct {
	Name string `json:"name"`
}

type Pokemon struct {
	EntryNo int            `json:"entry_number"`
	Species PokemonSpecies `json:"pokemon_species"`
}

type Response struct {
	Name    string    `json:"name"`
	Pokemon []Pokemon `json:"pokemon_entries"`
}

func main() {

	res, err := http.Get("http://pokeapi.co/api/v2/pokedex/kanto/")

	if err != nil {
		fmt.Print(err.Error())
		os.Exit(1)
	}

	data, err := ioutil.ReadAll(res.Body)
	// first use ioutil.ReadAll(response.Body) to read in data from the incoming byte stream and then convert this []byte response into a string using string(responseData) within our print statement.

	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(string(data))

	var responseObject Response

	json.Unmarshal(data, &responseObject)

	fmt.Println(len(responseObject.Pokemon))

	for i := 0; i < len(responseObject.Pokemon); i++ {
		fmt.Println(responseObject.Pokemon[i].Species.Name)
	}
}
