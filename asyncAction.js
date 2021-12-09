//Tutorial 12: Async Actions  (please refer notes)

//Within this file we need to define three things the state the action and the reducer 
//lets strt with the state
//the state is going to be an object with three properties as we have already discuss
//netx we have an action, remember in earlier series we have spoke about an action creators basically
//the function that returns an action we are going to do same in this application as well
//so lets begin by declaring the constants for the action types 
//NOW lets create our action creators the first one is to fetch the data 
//second action creator is to store the list of users if the request was successful also we have property 
//payload set to the argument users
//third and final action creator is to store an error message if the request failed and payload is 
//argument error message all right now lets define our reducer function
//const reducer = (state=initialState, action) => {}
//reducer is equal to an arrow fundtion an arrow function gets two arguments state with default value of 
//initialState which we have already defined and the second argunemt is an action based on the action type
//we need to return a new state so if the action type is fetch users request we're going to return an object
//where we make a copy of the existing state and only set loading flag to true if the action type 
//is FETCH_USER_SUCCESS we return an object where loading is false user is going to be action.payload
//which is the property thatwe are now sending through the action creator and we also clear out the error message
//if at all there was any now the final case is FETCH_USERS_FAILURE so if the API request failes our loading
//is done so loading is false users is going to be an empty array again
//an error is going to be action.payload in each of these cases corresponds to the payload
//property that the action now contains if the request was successful the payload is an array of users and if the
//request failed the payload is an error message the same we are using in our reducer all right now final step
//is create our redux store
//so at the top const redux = require('redux') and const creatStore = redux.createStore and at the bottom
//and at the bottom const store = createStore(reducer) and that pretty much completes our set up to understand
//about async actions


const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
    return {
    type: FETCH_USERS_REQUEST
}
}

const fetchUsersSuccess = () => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }    
        
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }    
    }

}


const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            //response.data is the array of users
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            //error.message is the error description
            dispatch(fetchUsersFailure(error.message))
        })

    }

}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {consle.log(store.getState())})
store.dispatch(fetchUsers)


//what is left now is to make an API call and dispatch the appropriate actions we have in our application
//lets see how to proceed with that in next video

//Tutorial 13: Redux Thunk MiddleWare

//firts thing lets install the two packages Axios and redux-thunk
//so lets run the command npm install axios redux-thunk
//second step is to apply redux-thunk middleware to our redux store for that at the top get hold of the
//apply middleware function from redux
//const applyMiddleware = redux.applyMiddleware
//next in creatStore method pass it as a second argument i.e const store = createStore(reducer, applyMiddleware)
//the argument to apply middleware will be the thunk middleware so at the top import it
//i.e const thunkMiddleware = require('redux-thunk').default and pass it as argument to applyMiddleware
//also lets make sure we have import Axios now our final step is to decide
//the async action creator i am going to define a function called fetchUsers
//what we learned so far is that an action  creator returns an action but what the thunkMiddleware
//brings to the table is the ability for an action creator to written a function instead of an 
//action object so we can now return a function and what is special about this function is that
//it doesnt have to be pure so it is allowed to have side effects such as async API calls and this
//function can also dispath an action like the once we have seen before that is made it possible because
//it receive the dispath method as its argument
//now lets see how to make an Axios request and dispatch the necessary action for the request we are going to
//be using JSONPlaceholder, we get the URL endpoint to make our get request
//so back in VS code within the function body axios.get(paste the url here)
//if the request was successful we can back the response and if the request failed we get an error
//so we have made our Axios request now we dispath the appropriate action
//before we fire off our API call we dispath fetchUsersRequest this will basically set loading to true
//when we get back the response we are going to dispath fetchUsersSuccess passing in list of users
//and list of users is const users = response.data
//it gives us all the property and our log will be flooded with data instead i am going to use map
//operator return only the ID for each of the user for each user returned user.ID 
//i,e const users = response.data.map(user => user.id)
//so when the request is successful we dispath fetchUsersSuccess action which store teh users in our state
//similary if teh request failed we dispath fetchUsersFailure passing in error.message
//i.e dispatch(fetchUsersFailure(error.message))
//finally at the bottom we subscribe to our store i.e store.subscribe(() => {consle.log(store.getState())})
//and then dispath this asynchronous action creator i.e store.dispatch(fetchUsers)
//if we now open the terminal and run the command node asyncAction.js
//we should be able to see the logs




