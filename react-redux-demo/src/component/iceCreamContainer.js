//Tutorial 22: Cake and iceCream

//lets create a file iceCreamContainer
//iceCreamContainer is going to be very similar to the cakeContainer component so to save the some time
//i am going to copy the code from cakeContainer and make the necessary changes so lets start
//instead of buyCake we have to put buyIcecream and i am going to replace all occurance of buyCake with 
//buyIceCream and instaed of cakeContainer iceCreamContainer
//now lets include our component in APP.js and test it out if we take a look at browser we can see the thngs
//have to splitten and this is because we haev spit the overrall global state into the state that is 
//individually manage by the separate reducer
//if we check in the rootReducer the cakeReducer is refered to just cake and icecreamReducer
//i refered to just iceCreams thats mean the state object that we have define separately in reducer file
//aslo need to be act differently so lets make changes in iceCreamCOntainer
// so numOfIceCreams: state.iceCream.numOfIceCreams
//similarly in cakeContainer
//and also u\in HookCakeContainer


import React from 'react'
import { connect } from 'react-redux'
import {buyIceCream } from '../redux'

function iceCreamContainer(props) {
    return (
        <div>
            <h2>Number of iceCream - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>BuyIcecream</button>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispathProps = dispath => {
    return {
        buyIceCream: () => dispath(buyIceCream())
    }

}
export default connect ( mapStatetoProps, mapDispathProps)(iceCreamContainer)
