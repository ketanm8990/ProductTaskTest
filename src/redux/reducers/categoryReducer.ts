
import * as types from '../actions/types';

/*========================================================
     * function Name: categoryReducer.js 
     * function Purpose: state management
     * function Parameters: state and action
     * function ReturnType: action type and payload
     * function Description: api calling response action type and set payload of state stored in categoryReducer.js
     *=====================================================*/

const INITIAL_STATE = {
    categoryLoading: false,
    categoryList: [],
    categoryError: null,
    addcategoryLoading: false,
    addcategoryMsg: null,
    addcategoryError: null,
    updatecategoryLoading: false,
    updatecategoryMsg: null,
    updatecategoryError: null,
    deletecategoryLoading: false,
    deletecategoryMsg: null,
    deletecategoryError: null,
};

export default function reducer(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case types.GET_CATEGORY_LOADING:
            return { ...state, categoryLoading: action.payload };
        case types.GET_CATEGORY_SUCCESS:
            return { ...state, categoryList: action.payload };
        case types.GET_CATEGORY_FAIL:
            return { ...state, categoryError: action.payload };
        case types.ADD_CATEGORY_LOADING:
            return { ...state, addcategoryLoading: action.payload };
        case types.ADD_CATEGORY_SUCCESS:
            return { ...state, addcategoryMsg: action.payload };
        case types.ADD_CATEGORY_FAIL:
            return { ...state, addcategoryError: action.payload };
        case types.UPDATE_CATEGORY_LOADING:
            return { ...state, updatecategoryLoading: action.payload };
        case types.UPDATE_CATEGORY_SUCCESS:
            return { ...state, updatecategoryMsg: action.payload };
        case types.UPDATE_CATEGORY_FAIL:
            return { ...state, updatecategoryError: action.payload };
        case types.DELETE_CATEGORY_LOADING:
            return { ...state, deletecategoryLoading: action.payload };
        case types.DELETE_CATEGORY_SUCCESS:
            return { ...state, deletecategoryMsg: action.payload };
        case types.DELETE_CATEGORY_FAIL:
            return { ...state, deletecategoryError: action.payload };
        default:
            return state;
    }
};

