import * as actionTypes from '../constant/foodsConstants';

export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_FOODS_REQUEST:
            return {
                loading: true,
                products: []
            }
        case actionTypes.GET_FOODS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case actionTypes.GET_FOODS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const getProductDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_FOOD_DETAILS_REQUEST:
            return {
                loading: true,
            }
        case actionTypes.GET_FOOD_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case actionTypes.GET_FOOD_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_FOOD_DETAILS_RESET:
            return {
                product: {}
            }
        default:
            return state;
    }
};