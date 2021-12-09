//Tutorial 17: Store

//Lets create a file store.js within this file we  create our store for which we use the create store method
//from reducx so import { createStore } from "redux";

import { applyMiddleware, createStore, Middleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import rootReducer from "./rootReducer";


const store = createStore(rootReducer,composeWithDevTools,(applyMiddleware(logger)))

export default store

//notice now we are using the ES6 syntax next lets make a use of this method the 
//const store = createStore()
//the createStore() methos accepts the reducer function as its parameter the reducer we have for our
//application is the cakeReducer lets import it and pass it in as parameter finally lets export
//store as default export 
//alright at this point what we done is created our redux store

//next step is to provide this store to our react application and this is where our react-redux libarary makes
//its first appearance to provide the redux store to our application the react redux library exports 
//component called provider

//lets open the file App.js and at the top import {provider} from react-redux next 
//i am going to wrap the div tag in the return statement with this provider component 
//now hang on how does the provided component know about our redux-store 
//well we need to specify that as a prop so at the top i am going to import store from redux store
//now on the provider component we can specify a prop called store and pass in the store that 
//we have just imported
//one point which is important is where you provide teh store typically it is  at the top of teh app
//component as you can see here in our example that is simply beacuse doing so will provide the store
//to basically every component in your  application component tree
//alright that is pretty much the code for creating redux store and providing it to our react application
//the last bit remaining is to understand how our  react component can dispath  an action and 
//subscibe to changes in the store 

//In this video we learned how to provide the store to all the components in our application in
//next video lets learn the final bit and that is how do we get hold of the redux state and
//how do we dispath an action from within a react component
//lets open cakeContainer.js cakeContainer is a component where we want to display the number of cakes
//which is part of the redux state and thid is also the component from which we want to 
//dispatch the BUY_CAKE action on button click we are going to achieve the result in three steps
//first step

//Tutorial 23: Logger Middleware

//kindly check the handwritten notes for the same

//Tutorial 24: Redux Devtool Extenssion

//kindly check the handwritten notes for the same


