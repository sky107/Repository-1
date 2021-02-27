import React, { useState ,useEffect} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);




useEffect(()=>{
fetch('https://react-firebase-a5fd4-default-rtdb.firebaseio.com/testing.json')
.then(response=>response.json())
.then(responseData=>{
const loadedIngredients=[];
for(const key in responseData){
loadedIngredients.push({
id:key,
title:responseData[key].title,
amount:responseData[key].amount
});
}
setUserIngredients(loadedIngredients);
});

},[]);

  const addIngredientHandler = ingredient => {
    fetch('https://react-firebase-a5fd4-default-rtdb.firebaseio.com/testing.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        setUserIngredients(prevIngredients => [
          ...prevIngredients,
          { id: responseData.name, ...ingredient }
        ]);
      });
  };

  const removeIngredientHandler = ingredientId => {
    setUserIngredients(prevIngredients =>
      prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
    );
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
