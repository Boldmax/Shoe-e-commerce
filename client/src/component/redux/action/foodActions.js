import * as actionTypes from '../constant/foodsConstants';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_FOODS_REQUEST });

        const { data } = await axios.get(`/menu`);

        dispatch({
            type: actionTypes.GET_FOODS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_FOODS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_FOOD_DETAILS_REQUEST });

        const { data } = await axios.get(`/menu/${id}`);

        dispatch({
            type: actionTypes.GET_FOOD_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_FOOD_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_FOOD_DETAILS_RESET,
    })
};