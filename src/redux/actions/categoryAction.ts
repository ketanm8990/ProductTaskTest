
import { Alert } from 'react-native';
import * as types from './types';
import { API, graphqlOperation } from 'aws-amplify';

/*========================================================
     * function Name: categoryAction.js
     * function Purpose: method of action
     * function Parameters: url, method, body, onLoadStart, onLoadEnd, onSuccess, onError using api calling
     * function ReturnType: onLoadStart, onLoadEnd, onSuccess, onError
     * function Description: api calling using method of action in categoryAction.js
     *=====================================================*/

export const getCategorySuccess = (payload: any) => {
    return { type: types.GET_CATEGORY_SUCCESS, payload: payload }
}

export const getCategoryFail = (payload: any) => {
    return { type: types.GET_CATEGORY_FAIL, payload: payload }
}

export const incrementCategoryLoading = () => {
    return { type: types.GET_CATEGORY_LOADING, payload: true }
}

export const decrementCategoryLoading = () => {
    return { type: types.GET_CATEGORY_LOADING, payload: false }
}
// get category list
export const getCategory = () => {
    return async (dispatch: any) => {
        dispatch(incrementCategoryLoading());
        const getCategoryQuery = `query test{
            listCategorys {
              items {
                name
                id
                products {
                  items {
                    quantity
                    price
                    name
                    id
                    description
                    categoryID
                  }
                }
              }
            }
          }`;

        let response = await API.graphql(graphqlOperation(getCategoryQuery));
        dispatch(decrementCategoryLoading());
        if (response && response.data.listCategorys != null && response.data.listCategorys.items.length > 0) {
            dispatch(getCategorySuccess(response.data.listCategorys.items));
        } else {
            dispatch(getCategoryFail('Category is not found'));
        }
    }
}

export const addCategorySuccess = (payload: any) => {
    return { type: types.ADD_CATEGORY_SUCCESS, payload: payload }
}

export const addCategoryFail = (payload: any) => {
    return { type: types.ADD_CATEGORY_FAIL, payload: payload }
}

export const incrementAddCategoryLoading = () => {
    return { type: types.ADD_CATEGORY_LOADING, payload: true }
}

export const decrementAddCategoryLoading = () => {
    return { type: types.ADD_CATEGORY_LOADING, payload: false }
}
// add category 
export const addCategory = (categoryName: String, callBack: any) => {
    return async (dispatch: any) => {
        dispatch(incrementCategoryLoading());
        const addCategoryQuery = `mutation MyMutation {
            createCategory(input: {name: "${categoryName}"}) {
              name
              id
            }
          }`;

        let response = await API.graphql(graphqlOperation(addCategoryQuery));
        dispatch(decrementCategoryLoading());
        if (response && response.data.createCategory != null ) {
            callBack();
            dispatch(addCategorySuccess(null));
            dispatch(getCategory());
        } else {
            dispatch(addCategoryFail('Add Category is failed'));
        }
    }
}

export const updateCategorySuccess = (payload: any) => {
    return { type: types.UPDATE_CATEGORY_SUCCESS, payload: payload }
}

export const updateCategoryFail = (payload: any) => {
    return { type: types.UPDATE_CATEGORY_FAIL, payload: payload }
}

export const incrementUpdateCategoryLoading = () => {
    return { type: types.UPDATE_CATEGORY_LOADING, payload: true }
}

export const decrementUpdateCategoryLoading = () => {
    return { type: types.UPDATE_CATEGORY_LOADING, payload: false }
}
// add category 
export const updateCategory = (categoryName: String, categoryId: String, callBack: any) => {
    return async (dispatch: any) => {
        dispatch(incrementCategoryLoading());
        const updateCategoryQuery = `mutation MyMutation {
            updateCategory(input: {name: "${categoryName}", id: "${categoryId}"}) {
              id
              name
            }
          }`;

        let response = await API.graphql(graphqlOperation(updateCategoryQuery));
        dispatch(decrementUpdateCategoryLoading());
        if (response && response.data.updateCategory != null ) {
            callBack();
            dispatch(updateCategorySuccess(null));
            dispatch(getCategory());
        } else {
            dispatch(updateCategoryFail('Update Category is failed'));
        }
    }
}

export const deleteCategorySuccess = (payload: any) => {
    return { type: types.DELETE_CATEGORY_SUCCESS, payload: payload }
}

export const deleteCategoryFail = (payload: any) => {
    return { type: types.DELETE_CATEGORY_FAIL, payload: payload }
}

export const incrementDeleteCategoryLoading = () => {
    return { type: types.DELETE_CATEGORY_LOADING, payload: true }
}

export const decrementDeleteCategoryLoading = () => {
    return { type: types.DELETE_CATEGORY_LOADING, payload: false }
}
// delete category 
export const deleteCategory = (categoryId: String) => {
    return async (dispatch: any) => {
        dispatch(incrementDeleteCategoryLoading());
        const deleteCategoryQuery = `mutation test {
            deleteCategory(input: {id: "${categoryId}"}) {
              id
              name
            }
          }`;

        let response = await API.graphql(graphqlOperation(deleteCategoryQuery));
        dispatch(decrementDeleteCategoryLoading());
        if (response && response.data.deleteCategory != null ) {
            dispatch(deleteCategorySuccess(null));
            dispatch(getCategory());
        } else {
            dispatch(deleteCategoryFail('Delete Category is failed'));
        }
    }
}