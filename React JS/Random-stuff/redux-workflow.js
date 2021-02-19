/*
Coded by Siddharth Kumar Yadav
Email:siddharthsk101@gmail.com
Title: understading redux work flow
*/

const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};
//reducer

const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }

  return state;
};

// store
// a store need to be initalised with reducer is strongly connected to store hence responsible for updating of state

const store = createStore(rootReducer);
//console.log(store.getState());
//reducer

//subscription get trigered when dispatch is exectured

store.subscribe(() => {
  console.log("[Subscrption]", store.getState());
});

//dispacthing action
//ALL CAPTIAL LETERS
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
