const LOGIN='LOGIN';
const LOGOUT='LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {    //this is the reducer

  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);   //this is creating the store.

const loginUser = () => {   //this is the action creator.
  return {
    type: LOGIN
  }
};

const logoutUser = () => {  //this is also the action creator.
  return {
    type: LOGOUT
  }
};