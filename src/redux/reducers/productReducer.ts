import * as types from '../actions/types';

/*========================================================
     * function Name: productReducer.js 
     * function Purpose: state management
     * function Parameters: state and action
     * function ReturnType: action type and payload
     * function Description: api calling response action type and set payload of state stored in productReducer.js
     *=====================================================*/

const INITIAL_STATE = {
    productLoading: false,
    productList: [],
    productError: null,
    addProductLoading: false,
    addProductMsg: null,
    addProductError: null,
    updateProductLoading: false,
    updateProductMsg: null,
    updateProductError: null,
    deleteProductLoading: false,
    deleteProductMsg: null,
    deleteProductError: null,
};

export default function reducer(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case types.GET_PRODUCT_LOADING:
            return { ...state, productLoading: action.payload };
        case types.GET_PRODUCT_SUCCESS:
            return { ...state, productList: action.payload };
        case types.GET_PRODUCT_FAIL:
            return { ...state, productError: action.payload, productList: [] };
        case types.CLEAR_PRODUCT_DATA:
            return { ...state, productList: [] };
        case types.ADD_PRODUCT_LOADING:
            return { ...state, addProductLoading: action.payload };
        case types.ADD_PRODUCT_SUCCESS:
            return { ...state, addProductMsg: action.payload };
        case types.ADD_PRODUCT_FAIL:
            return { ...state, addProductError: action.payload };
        case types.UPDATE_PRODUCT_LOADING:
            return { ...state, updateProductLoading: action.payload };
        case types.UPDATE_PRODUCT_SUCCESS:
            return { ...state, updateProductMsg: action.payload };
        case types.UPDATE_PRODUCT_FAIL:
            return { ...state, updateProductError: action.payload };
        case types.DELETE_PRODUCT_LOADING:
            return { ...state, deleteProductLoading: action.payload };
        case types.DELETE_PRODUCT_SUCCESS:
            return { ...state, deleteProductMsg: action.payload };
        case types.DELETE_PRODUCT_FAIL:
            return { ...state, deleteProductError: action.payload };
        default:
            return state;
    }
};

