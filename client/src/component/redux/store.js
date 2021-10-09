import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducers } from "./reducer/cartReducers";
import { getProductsReducer, getProductDetailsReducer } from "./reducer/foodReducers";

const reducer = combineReducers({
    cart: cartReducers,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
});

const middleware = [thunk];

const localStorageCart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

const INITIAL_STATE = {
    cart: {
        cartItems: localStorageCart
    }
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;