import * as types from './types';
import { API, graphqlOperation } from 'aws-amplify';

/*========================================================
     * function Name: productAction.js
     * function Purpose: method of action
     * function Parameters: url, method, body, onLoadStart, onLoadEnd, onSuccess, onError using api calling
     * function ReturnType: onLoadStart, onLoadEnd, onSuccess, onError
     * function Description: api calling using method of action in productAction.js
     *=====================================================*/

export const getProductSuccess = (payload: any) => {
  return { type: types.GET_PRODUCT_SUCCESS, payload: payload }
}

export const getProductFail = (payload: any) => {
  return { type: types.GET_PRODUCT_FAIL, payload: payload }
}

export const incrementProductLoading = () => {
  return { type: types.GET_PRODUCT_LOADING, payload: true }
}

export const decrementProductLoading = () => {
  return { type: types.GET_PRODUCT_LOADING, payload: false }
}
// get product list
export const getProduct = (category: any) => {
  return async (dispatch: any) => {
    dispatch(incrementProductLoading());
    const getProductQuery = `query test
    {
      listProducts(filter: {categoryID: {eq: "${category}"}}) {
        items {
          name
          id
          description
          categoryID
          price
          quantity
          category {
            id
            name
          }
        }
      }
    }
    `
    let response = await API.graphql(graphqlOperation(getProductQuery));
    dispatch(decrementProductLoading());
    if (response && response.data.listProducts != null && response.data.listProducts.items.length > 0) {
      dispatch(getProductSuccess(response.data.listProducts.items));
    } else {
      dispatch(getProductFail('product is not found'));
    }
  }
}

export const addProductSuccess = (payload: any) => {
  return { type: types.ADD_PRODUCT_SUCCESS, payload: payload }
}

export const addProductFail = (payload: any) => {
  return { type: types.ADD_PRODUCT_FAIL, payload: payload }
}

export const incrementAddProductLoading = () => {
  return { type: types.ADD_PRODUCT_LOADING, payload: true }
}

export const decrementAddProductLoading = () => {
  return { type: types.ADD_PRODUCT_LOADING, payload: false }
}
// add product
export const addProduct = (categoryID: String, description: String, productName: String, price: Number, quantity: Number, callBack: any) => {
  return async (dispatch: any) => {
      dispatch(incrementAddProductLoading());
      const addProductQuery = `mutation test {
        createProduct(input: {categoryID: "${categoryID}", description: "${description}", name: "${productName}", price: ${price}, quantity: ${quantity}}) {
          name
          id
          description
          categoryID
          price
          quantity
          category {
            id
            name
          }
        }
      }`;

      let response = await API.graphql(graphqlOperation(addProductQuery));
      dispatch(decrementAddProductLoading());
      if (response && response.data.createProduct != null ) {
          callBack();
          dispatch(addProductSuccess(null));
          dispatch(getProduct(categoryID));
      } else {
          dispatch(addProductFail('Add Product is failed'));
      }
  }
}

export const updateProductSuccess = (payload: any) => {
  return { type: types.UPDATE_PRODUCT_SUCCESS, payload: payload }
}

export const updateProductFail = (payload: any) => {
  return { type: types.UPDATE_PRODUCT_FAIL, payload: payload }
}

export const incrementUpdateProductLoading = () => {
  return { type: types.UPDATE_PRODUCT_LOADING, payload: true }
}

export const decrementUpdateProductLoading = () => {
  return { type: types.UPDATE_PRODUCT_LOADING, payload: false }
}
// update product
export const updateProduct = (categoryID: String,productID: String, description: String, productName: String, price: Number, quantity: Number, callBack: any) => {
  return async (dispatch: any) => {
      dispatch(incrementUpdateProductLoading());
      const updateProductQuery = `mutation MyMutation {
        updateProduct(input: {id: "${productID}", description: "${description}", name: "${productName}", price: ${price}, quantity: ${quantity}}) {
          id
          description
          categoryID
          name
          price
          quantity
          category {
            name
            id
          }
        }
      }`;

      let response = await API.graphql(graphqlOperation(updateProductQuery));
      dispatch(decrementUpdateProductLoading());
      if (response && response.data.updateProduct != null ) {
          callBack();
          dispatch(updateProductSuccess(null));
          dispatch(getProduct(categoryID));
      } else {
          dispatch(updateProductFail('Update Product is failed'));
      }
  }
}

export const deleteProductSuccess = (payload: any) => {
  return { type: types.DELETE_PRODUCT_SUCCESS, payload: payload }
}

export const deleteProductFail = (payload: any) => {
  return { type: types.DELETE_PRODUCT_FAIL, payload: payload }
}

export const incrementDeleteProductLoading = () => {
  return { type: types.DELETE_PRODUCT_LOADING, payload: true }
}

export const decrementDeleteProductLoading = () => {
  return { type: types.DELETE_PRODUCT_LOADING, payload: false }
}
// delete product
export const deleteProduct = (productID: String, categoryID: String) => {
  return async (dispatch: any) => {
      dispatch(incrementDeleteProductLoading());
      const deleteProductQuery = `mutation test {
        deleteProduct(input: {id: "${productID}" }) {
          id
          name
        }
      }`;

      let response = await API.graphql(graphqlOperation(deleteProductQuery));
      dispatch(decrementDeleteProductLoading());
      if (response && response.data.deleteProduct != null ) {
          dispatch(deleteProductSuccess(null));
          dispatch(getProduct(categoryID));
      } else {
          dispatch(deleteProductFail('Delete Product is failed'));
      }
  }
}

