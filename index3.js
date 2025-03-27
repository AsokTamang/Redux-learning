const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

const counterReducer = (state=0,action)=>{  //this is the pure function that does the necessary logic
  switch(action.type){
    case INCREMENT:
     return state=state+1;
    case DECREMENT:
     return state=state-1;
    default:
    return state; 
  }

}

const incAction = ()=>{  //these are the action that return the plain object to the reducer.
  return {type:INCREMENT,}
}; 

const decAction = ()=>{
  return {type:DECREMENT,}
}; 

const store = Redux.createStore(counterReducer); 
