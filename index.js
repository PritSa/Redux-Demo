//Tutorial 4: Actions

//First define the string constant that indicates the type of the action 
//doing this will avoid the spelling mistakes when  reusing the Action
/*
const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

//(prevState, action) => newState

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state

    }
}

const store = createStore(reducer) 
console.log('initialState', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
*/
//Next define an Action, remember the action is an object that has a type property so an object
//and a property type whose value is a constant BUY_CAKE and  that is it
//We have created our very first action in redux
//now we are not restricted to just having the type property other than type the structure of an
//object is completely up to you
//so we can have another property that is an object or really simple property that is just a string
//for our example we will simply add a property info and set it to 'first redux action'
//i.e info: 'First Redux Action'
//now we have our action in place but with redux we also go the extra mile to implement what is known as 
//action creator and as a name indicates action creator are simply create an action interms of code
//and action creator is a function that returns an action so to implement an action creator
 //i am going to create a function byCake which returns the action.
 //i.e function byCake() {
    //return {
       // type: BUY_CAKE,
        //info: 'First Redux Action' }}
//NOw we might be wondering why do we do this, we will answer this few videos down the line
//once we understand the complete flow of a Redux app for now I want you to take away from
//two things from this video an action is an Object with type property an action creator is a function
//that returns an action
//so, we have implenented the Action part
//Now lets move to the Reducer part

//Tutorial 6: Reducer

// (prevState, action) => newState

//so what we have notice we need arguments to write a reducer function the state of the application
//before making any change and the action
//now we already have our action defined so what is remaining is to determine what our application state looks like
//as a shopekeeper all i want to keep a track of the number of cakes on the shelf so our state is a 
//simple numeric value but if you recollect the first principle of redux your application state
//has to be representes by a single object so for this example the state is going to be an object
//that has a property called number of cakes which is a numeric value
//lets go with the assumption that when we open the shop in morning there are ten cakes on the shelf
//i.e const initialState = { numOfCakes: 10}
//we pass this initial state as the default value for the state parameter in the reducer so
//when the application is started initial state of teh application is passed in as an argument 
//to the reducer function alright now we have both the parameter lets define our Reducer function
//i am going to define it as arrow function and two parameter are state and action 
//for the state parameter we supply default value of initial state and  then within the function body we 
//we will return the new state of the application based on the current state and  the action
//i.e
//so within the function body i am going to add a switch statement where the switch expression is
//action.type if the action type is by cake we are going to retuen the new state of the application as 
//a new object where the numberOfCakes is the current number of cakes - 1 and if there was an 
//action which we havent accounted for  we simply return the state as it is 
//very imp to note here we are not mutating the state object we return a new object and
//that is pretty much your reducer function, it is a pure function that accepts state and 
//action as arguments and returns the next state of the application now what we have written here
//works fine for  our example but in reality your state object might contain more than one property
//that is why it is always safer to first create a copy of the state object 
//and then chaneg only teh properties that need to so to make a copy of state object we use the spread
//operator ...state, we are basically asking reducer to first make a copy of state object and 
//then only update the number of cakes
//if there were other properties they would remain unchanged all right with taht we complete another
//part of now last remaining part is to implementing Redux store
//once we implenet that we also be able to connect all the indicidual cases together 
//so in the next video lets take a look at the redux store

//Tutorial 7: Store

//Kindly check notes
//so const redux require('redux') 
//1: Holding application state
//the Redux library provide the method called create store which we are going to use for creating the store
//so const createStore = redux.createStore
//now  at the bottom we make use of this method const store = createStore() method
//the createStore() method accepts the parameter which is the reducer function i.e const store = createStore() 
//the reducer function has the initial state of the application this is required for the store to make
//the state transition based on the actions receive so that is responsibility number one
//redux store holding the application state

//2: second responsibilty to expose the method called getState() which gives the current state in the
//store, lets implement this and add log statement
//i.e console.log('initialState', store.getState());
//since we have not performed any transition yet, state should effectively give us the initial state 
//of the application allright next move on to next responsibility

//4.lets jump to the responsibitity no 4 which is the next logical step
//the fourth responsibilty is to allow the app to subscribe to changes in the store that is achieved
//using SUBSCRIBE method
//so store.subscribe() subscribe method accept the function to keep our code simple we are simply
//going to log the updated state so 
//store.subscribe(() => console.log('Updated state', store.getState()))
//this is our fourth responsibility nowlets jumb back to third responsibility 

//3: responsibility no 3
//the store provides a dispath method to update the state 
//so, store.dispath() the dispath method accepts action as its parameter now you can directly provide teh action
//if you want to but we have an action creater so as a parameter we invoke the action creator which in turn 
//will return the action and to cause a few more transitions i will dispatch the same action two more times
//i.e store.dispatch(buyCake()) 
//alright that is our implenetation of step number three 

//5: the final part is unsubscribe from teh store by calling the function returned by subscribe method
//right now we arent capturing the return function from teh subscribe method so lets add 
//const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
//now our code has completes we can call the unsubscribe method , i.e unsubscribe()
//and that is pretty much it we have implemented all the responsibility of the Redux
//we can now test our cake shop application in the terminal simply 
//run the command node index

//we can see the output log we have four statement log in console
//the initial state where the number of cakes is 10
//and with each action of buying a cake one cake has been reduce from the store 

//Redux pattern
//Create a store declare the initial state and the reducer define your action and
//action creators subscribe to the store dispath actions to update the store 
//finally unsunscribe to the changes and this is really important to keep in mind 
//this is essence of redux, when we dive into react application this is exactly we are going to do but
//with a few helper functions 

//before we wind up on this basic example a quick note on action creator you can see that we have an
//action creator buyCake now you could buy all means passin object itself as a parameter to dispath method
//but by having an action creator any changes to the action object will happen in only one place
//imagine you pass in an object to every dispath method which is called in several places in 
//your application after few days if you have to either add a new property or rename a property
//you would have to do it in all the five or 10 different places so better safe than sorry
//and go with action creator instead of just action

//Tutorial9: Multiple Reducer
//please check the notes of tutorial 8

//In this video lets lerarn how to create multiple reducers in our JS application in the last video we 
//understood the requirement our shop now needs to send both cake and icecreame and we decided that we would
//have two shopkeeprs one each for managing cake and icecream when it comes to code the shopekeeper is nothing but
//the reducer when we talk about having two shopkeepers it translate to having two reducer in our code
//if we quickly take a look we can see thatwe have one reducer the default value for the state parameter is
//the initial state and it also accepts an action based  on the two parameter the new state which is the
//updated number of cake is returned now what is required is to implement another reducer that does
//pretty much the same before we implement that though i also want to show you how to work with a single
//reducer on the initial state object i am going to add another property number of ice creams and set
//it to 20 i.e numOfIceCreams: 20
//next in the reducer i will add another switch case which is buy icecream so lets copy the
//BUY_CAKE case and change it to BUY_ICECREME
//now lets define our action and action creator to buy an icecream at the top 
//const BUY_ICECREAM = 'BUY_ICECREAM' and then action creator AND THEN
//function buyIceCream(){ return {  type: BUY_ICECREAM,}}
//and finally lets dispatch an action to buy some ice creams so start out dispatch but this time we are
//going to buy icecream so 2 dispatches to buyIceCream lets save this and test it out 
//lets save the code and check in the terminal by using node index 
//we can see the log statement when we buy a cake only the number of cakes goes down the number of icecream
//remain the same and when we buy an icecream only the number of icecream goes down and the number of cakes
//remain the same now this approach of using just one reducer definitely works but in the long run
//when we have several prodects to sell it just becomes one huge function that would be difficult to debug 
//manage and keep track of so now lets see the other approach of using multiple reducer
//what we are going to do is basically split our state and the reducer so instead of having one object
//for the initial state we are now going to have two 

//so const initialCakeState = {numberOfCakes: 10} will equalt to be an object where we only maintained number of cakes this is 
//10 then const initialIceCreamState = {numberOfIceCreams: 20}
//similarly we are going to split our reducer into two i will copy the existing reducer and make necessary changes
//so reduceris going to be cakeReducer and default value will be initialCakeState i will also get rid of the 
//switch case for buying an iceCream similary we are going to create our icecream reducer as well
//finally i am going to comment out the old state and the reducer 
//now you can see that our reducer function is much simpler now the cake reducer is only bothered about cake state
//and the logic to update the cake state it has nothing to do with icecream, similarly the icecream reducer is
//only bothered about the icecream state and the logic to update teh icecream state
//it has nothing to do with cakes at this point everything is going well but 
//when we take a look at our create store function we see taht there is a problem the create store method can 
//accept only one reducer so how do we let redux know about both the reducer lets take a look at that 
//in next video

//Tutorial 10: Combine Reducer

//lets see how to combine multiple reducer or to be very specific to our example how to combine
//cake reducer and icecream reducer let me tell you its very simple redux provide you method called
//combined reducer to combine multiple reducers into a single reducer which can then be pass to the create
//store method so at the top lets first get hold of the method from redux 
//so, const combineReducers = redux.combineReducers
//next before we creat our store we combine our reducer the convention is to call the combination of all
//your reducers as the route reducer so const rootReducer = combineReducers()
//this method accepts an object each key/value pair for this object correspond to a reducer
//for a cakereducer i will specify the key as cake and the value is going to be cakeReducer function
//for the iceCreamReducer i will specify the key as icecream and the value will be iceCreamReducer
//i.e  cake: cakeReducer, iceCream: iceCreamReducer
//finally the create store will now accept the root reducer as its parameter 
//i.e const store = createStore(rootReducer) 
// and that is it
//if we now save the file and check the terminal
//we should get the output but what is now different is the overall global state object if you now wish to access
//number of cakes we have to specify state.cake.numberOfCake and if you wish to access the number of ice cream
//we specify the state.icecream.numberOfIceCream the cake and icecream here is corrospond to key
//we specified while combining two reducers you can specify the kay as anything you wish to but 
//what you see here is sort of convention also what we must know is that when we dispath an action
//both the reducer receive that action the difference is that one of them acts on that action whereas
//other just ignores it and by doing what we have just done each of the reducers is managing its
//own part of the global state the state parameter is different for every reducer and  correspond to
//the part of the state it manages when your app grows in size you can split the reducer in separate file
//and keep them completely independent and managing different areas you can have an 
//auth reducer a user reducer a profile reducer etc depending on  your application needs all right thats
//is about multiple reducer and combine reducer function from redux 



const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM,
    }
}

//(prevState, action) => newState

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCream: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numberOfIceCream: 20
}

// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case BUY_CAKE: return{
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//     }
    //     switch(action.type){
    //         case BUY_ICECREAM: return{
    //             ...state,
    //             numOfIceCream: state. numOfIceCream - 1
    //         }
    

    //     default: return state

    // }


const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecream: state.numOfIcecream - 1
        }


        default: return state

    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger)) 
console.log('initial State', store.getState());
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()


//Tutorial 11: Middleware

//If we refer to the redux-logger documentation we need to use the creat-logger method provided
//by the library so in VS code index.js we first require a redux logger
//const reduxLogger = require('redux-logger') and the const logger = reduxLogger.createLogger()
//i am just going to move require statement few lines above all right we now have the logger
//middleware that we want to use in our application but the question is how do we include the middleware 
//well its really simple, the redux liabrary provide a function calles applyMiddleware()
//which is used to apply the middleWare so right after the combine reducers i am going to get 
//hold on the applyMiddleware function so const applyMiddleware = redux.applyMiddleware
//then to the create store function we pass in a second parameter applyMiddleware
//i.e const store = createStore(rootReducer, applyMiddleware) 
//and what is middleware? a middleware is logger 
//this was define at the top and let me tell you right now we just have one middleware but you can pass
//in as many as your application requires for the final step i will remove the console.log
//statement in the store subscription as we have the logger middleware to handle all of that
//i.e const unsubscribe = store.subscribe(() => {})

//if we now save the file and run the command node index we should be able to see all the log


