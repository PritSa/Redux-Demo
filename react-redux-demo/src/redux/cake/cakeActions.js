//Tutorial 15: Actions
//Lets create a Actions and Action Creator
//lets create a file action creator within this file we define our action creator
//if you can recollect we just had one action creator which is buyCake
//lets define it now, so const buycake is going to be an arrow function that returns
//an action what is an action, action is an object with a type property this is 
//buycake now, this is fine but it is convention to create constants for our action type so within the same
//folder lets create a new file cakeTypes.js
//now lets import BUY_CAKE from cakeTypes and teh action type is now constant


import { BUY_CAKE } from "./cakeTypes"

const buyCake = () => {
    return {
      type:  'BUY_CAKE'
    }
}

//finally we are going to export an action creator to be able to use it in our components and that is 
//pretty much it we have define our action which is an object and we define our action creator which is4
//a function that returns an object 

//in the next video lets take a look at reducer

//so far we have our react app and action the next part to implement is reducer
//lets create a file cakeReducer.js

