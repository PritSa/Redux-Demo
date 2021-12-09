//Tutorial 14:   React Redux Setup

import React from 'react'
import { connect } from 'react-redux'
import {buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>BuyCake</button>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
numOfCakes: state.cake.numOfCakes
    }
}

const mapDispathProps = dispath => {
    return {
        buyCake: () => dispath(buyCake())
    }

}
export default connect ( mapStatetoProps, mapDispathProps)(CakeContainer)


//Tutorial 15: Actions
//lets create a redux folder with src and cake folder within redux

//lets open cakeContainer.js cakeContainer is a component where we want to display the number of cakes
//which is part of the redux state and thid is also the component from which we want to 
//dispatch the BUY_CAKE action on button click we are going to achieve the result in three steps
//first step: we are going to define a new function this function is called mapStatetoProps you can name
//it anything you want to but this the convention and i would recommand you to stick to the same this function
//gets the redux state as a parameter and returrns an object in our example we just have the one state 
//property that we are trying to access and that is the number of cakes so within our mapStateProps function
//i am going to specify a property called numberOfCakes and this is going to equal to state.numOfCakes
//and that is step number one. if you slightly confused just hang on for a few more minutes 
//now one hing i would like to point out here is about selectors if you take a look at the official
//react-redux documentation they maintain a separate file calles selectors so just like
// action and reducers there would be selectors what it does is basically return some state
// information from the redux store in our example selecting a numberOfCakes is pretty strightforward
//state.numOfCakes however in larger applications you might perform some data transformation and then 
//select only what is required so instead of  writting a couple of lines of code in the mapStatetoProp
// function it is extracted into a seperate file calles selectors now i am not going to do that because
//our example is really simple and strightforward i just wanted to make you aware of a term called selectors
//so that you know what the documentation is reffering to 
//all right lets move to the 

//Second step: step number two this again involves defining a new function this
//time the function is called mapDispathProps ths function gets the Redux dispath method as parameter and
//again returns an objectS in our application we just have the one action creator so within the object
//i am going to create a property called buyCake and this is going to be equal to an arrow function which
//dispathes the action creator from redux
//now we mention the action creator but we havent imported it yet so lets do that what i like to do is
//create a file called index.js from which i export all the action creator so in the Redux folder
//create index.js and export {buyCake} from './cake/cakeActions'
//in CakeContainer just import buyCake from redux
//that is step numner 2

//Third step: in step number 3 we are going to connect these two functions  with our react component
//and for that we use the connect function or connect higher order component from the react
//redux liabrary so at the top import {connect} from react-redux
//and at the bottom while exporting our component we connect the two functions 
//export default connect(mapStatetoProps, mapDispatchtoProps) with (cakeConatiner)
//what this connect function does is basically what the two function names specify in the first function
//the state from the redux store is mapped to our component props so apart from whatever props cakeContainer
//was receiveing it will now receive an additional props called number of cakes which reflects
//the number of cake in the redux store so  <h2>Number of Cakes - {props.numOfCakes}</h2>
//similary mapDispatchtoProp will basically map our dispath of an action creator to a prop in
//our component so our component now receive the second additional prop called buyCake which will
//basically dispath buyCake action what does it allow us to do is within our component we can now specify
//onClick is equal to props.buyCake
//and that is about it if i now save all the file and take a look at browser you can see that we have the
//number of cake set to 10 and when we click on buy cake button number will decrease by 1
//so our cake shop application is working as expected 

//lets explain the code in short
//first is mapStatetoprop when you want to access the redux state in your component you define
// the map state to  props function it gets the redux state as a parameter which can be used to 
//retrive a approprite property in our case  we map state.numberOfcake to a prop called Number of cakes
//which will then render in JSX similary for dispatching an actions we have the mapDispathtoProp function
// this function gets a dispath method as a parameter and allows us to map action creators to 
//props in our component
//in our example we mappeed dispathing by cake  to a prop called buyCake this allows us to call
//buy cake as props.buycake and all this is possible because of the connect function from react-redux
//the connect function connects react component to the redux store in our case it connects cake container
//to redux store so that is most basic pattern we have with react and redux 