//Tutorial 22: Cakes and Icecreams

//If we take  alook at cakeReducer function there are two thin first we define the initial state for the
//the cake reducer and then based on the state and the action we return the new state lets do the same in
//our iceCreamReducer as well
//so first we are going to import BUY_ICECREAM from iceCreamType and then we are going to declare our 
//initial state const initialState = {} equal to an object where we have a property numberOfIceCream set to 20
//then we have our reducer function const iceCreamReducer = (state = initialState, action) is going
//to accept state and action and returns the new state the state is going to have a defaukt value of initial 
//state witin the functional body we add a switch condition or switch expression with action.type
//and if the case is BUY_ICECREAM we return an object where we preserve the state or copy of the state 
//and then only change  numberOfIceCreams to state.numberOfIcecreams - 1
//we are also going to add defaukt condition return the current state finally at the bottom we export
//as the default iceCreamReducer

import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
    numberOfIceCreams: 20
    
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numberOfIceCreams: state.numberOfIceCreams - 1
        }

        default: return state
    }

}


//all right now that we have the iceCreamReducer to perform state transition based on the action the next 
//step is to make our redux store aware of this reducer if we take a look at store.js 
//we find the createStore function from the redux but earlier in the series we learned that the
//creatStore function can accept only one reducer luckily for us we also learned that Redux provides the 
//combined reducer function to handle the scenarios where there are multiple reducer
//so lets make use of that i like to do is within the redux folder create a separate file called
//rootReducer.js within this file we combine all our reducer and  export one single reducer that can passed
//to the createStore function 