State Management using Redux to get insights of Reducers, store, dispatching , action type,react-redux and  connect hoc . 

[Live](https://siddharth-react-redux-first-implementation.surge.sh)




![image](https://res.cloudinary.com/df2q7cryi/image/upload/v1613770917/main.cp_nzourx.png)


Summary and Tips

* OUTSOURCING OF ACTION TYPES: Hardcoding of operations like 'INCREMENT' or 'DECREMENT' can be dangerous as one mispelling can make the debugging process worse so the solution is to create a file inside store where export variables example: export const INCREMENT='INCREMENT'| Now import * as actionTypes from '<>' so easy to use actionTypes.INCREMENT hassle free from spelling mistakes.
