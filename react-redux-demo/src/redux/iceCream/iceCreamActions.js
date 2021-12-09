//Tutorial 22: Cakes and Icecreams

//lets import BUY_ICECREAM from iceCreamTypes
//now lets export our action creator which is BUY_ICECREAM this is gouing to be equal to an arrow function
//where we return an object with type set to BUY_ICECREAM
//we also need to ensure we export from index.js as to be able to later import it in our components
//so in index.js export {buyIceCream } from './iceCream/iceCreamActions'

import { BUY_ICECREAM } from "./iceCreamTypes";

export const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    }
}

//now lets define reducer function in iceCreamReducer.js