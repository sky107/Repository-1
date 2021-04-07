let state = {
  counter:0
};

console.log(state);
function rootReducer(state={counter:0}, action) {
  console.log(state);
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
      default:
      return state;
  }
}
export default rootReducer;
