//Tutorial 22: Cakes and IceCreams

//so first import combined reducer from redux  then we are going to import the two reducer
//in our application 1. cakeReducer 2.iceCreamReducer
//next define our rootReducer const rootReducer = combineReducers which is equal to combineReducers
//the argument to combineReducers is an object where we specify the reducer and this is something we have 
//learned with Redux in earlier in the series so this should seem new to you
//the final step is to export the rootReducer as a default export
//now back in store.js we import rootReducer from './rootReducer'
//and pass it as an argument to the createStore method and that is pretty much sll the code in our
//redux folder now we can go back to our component folder and create a new component for iceCrems


import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from './iceCream/iceCreamReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer