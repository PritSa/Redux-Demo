//Tutorial 20: useSelector Hook

import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numberOfcakes = useSelector(state => state.cake.numberOfcakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cake - {numberOfcakes}</h2>
            <button onClick = {() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer

//Create a functional component and in the JSX add h2 and button tag
//useSelector is a hook the react-redux library provides which acts as a closed equivalent to the
//mapStatetoProps function we have already seen
//soto get hold of any state that is maintained in the redux store we use the useSelector hook for our
//example we need to access the Number of cakes which is stored in the redux store lets see how to do thatt
//first we need to import useSelector from react redux so import {useSelector} from 'react-redux'
//then within the component we call useSelector this hooks accepts a function as its parameter and this
//function is called as the selector function the selector function receive the redux state as its argument
//very similar to mapStatetoProp function the function can then return a value and for our example we need
//to return state.numberOfcakes the useSelector hook basically returns whatever is returned by
//this selector function so lets save that value  const numOfcakes = useSelector(state => state.numberOfcakes)
//what we have bascially done  is access the number of cakes in the redux state and stored it in a
//variable called naumberOfCake that belongs to our react component the fina step is to include
//this variable in the JSX so within parantheses numberOfCakes 
//lets now include this component in APP component and test it out
//Now go back to the browser you can see that we are able to access the state value from redux store
//what is missing now though is the button click handler
//lets implement that in next video

//Tutorial 21: useDispatch Hook

//in this video lets learn about the useDispath Hook which is used to dispath an action with react-redux
//again this is pretty simple first we are going to import useDispatch from react redux next in the 
//component we call this hook , the useDispatch hook returns a reference  to the diapatch function from 
//redux store lets save that reference in a variable called dispatch, this variable can now be used to 
//dispatch actions as needed i.e const dispatch = useDispatch()
//for our button lets now add clickHandler <button onClick = {() => dispatch(buyCake())}>
//make  sure to import the creator at the top and that is all there is to it if you now
//save teh file and go back to the broeser and click on the button now the count should decreases
//so our HookCakeContaier still works as expected. 
//now i understand if you feel using hook is very simpler than using  the connect function but there are
//few usage warning when using react-redux with hooks but it all depends on the nesting of 
//components in your application and how you write your selector function so i will leave this for
//you to explore and understand
//in react documentation there is a section that says usage warning so do amke sure you go through that
//if you're ok with the conncet HOC by all means continue to do that but this is pretty much
//fundamental of react-redux with hooks


