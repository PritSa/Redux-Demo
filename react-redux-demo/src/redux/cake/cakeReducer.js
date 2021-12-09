//Tutorial 16: Reducers

//This will be the file that conatins our reducer and we know that the reducer is a function
//that accepts state and action as parameters and returns new state we have also seen how to define a reducer
// earlier in the series first i am going to define the initial state  so const initialState is an object
//where the number of cakes is 10 so we start off with 10 cakes in inventory next we define our reducer
//function so const cakeReducer is an equal to the arrow function the function acepts two parameters
//state and action for the state parameter we provide teh default value of initialState
//i.e const cakeReducer = (state = initialState, action) => {}
//next within the functional body we add a switch statement the switch expression is the action type
//we have just one action type hence lets import it 
//and switch case is case BUY_CAKE and if this is the case we simply have to deduct one from the current
//number of cakes so we returned whatever is the current state and then the numberOfCakes will
//be state.numOfCakes which is the current number of cakes minus 1
//lets also add the default case where we simply retuns the current state  finally to be able to use
//this reducer in different file we export it as default and that is pretty much our reducer
//and thats it pretty much about reducer lets take a look at creating a Redux store in the next video


import { BUY_CAKE } from "./cakeTypes"

const initialState = {
    numOfCakes: 10
    
}

const cakeReducer = (state = initialState, action) => {
switch(action.type) {
    case BUY_CAKE: return{
        ...state,
        numOfCakes: state.numOfCakes - 1
    }

    default: return state

}
}

export default cakeReducer

//In the next video lets create our Redux store and provide it to our react application this again is no
//different from what we have seen earlier in the series within the Redux folder lets create a
//new file store.js