
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { UserLoginReducer, MobileLoginUserReducer} from "./Reducer/UserLoginReducer";

const finalReducer = combineReducers({

    UserLoginReducer: UserLoginReducer,
  



});


let currnetUser = localStorage.getItem('currnetUser') ? JSON.parse(localStorage.getItem('currnetUser')) : []

// initile state  

const initialState = {
    // addToCartReducer:{cartItems:cartItems},

    UserLoginReducer: { currnetUser: currnetUser },

}


const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
});
const store = createStore(
    finalReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk)
        // other store enhancers if any
    )
);

export default store;
