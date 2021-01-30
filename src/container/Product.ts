import Product from '../screen/Product';
import { connect } from 'react-redux';
import { getProduct, addProduct, updateProduct, deleteProduct } from '../redux/actions';

/*========================================================
    * function Name: Product pages
    * function Purpose: called action and stored state
    * function Parameters: Product, mapStateToProps, dispatchers
    * function ReturnType: state
    * function Description: called action of dispatchers and stored state of mapStateToProps
    *=====================================================*/

const mapStateToProps = (state: any) => ({
    productLoading: state.product.productLoading,
    productList: state.product.productList,
    productError: state.product.productError,
    addProductLoading: state.product.addProductLoading,
    addProductMsg: state.product.addProductMsg,
    addProductError: state.product.addProductError,
    updateProductLoading: state.product.updateProductLoading,
    updateProductMsg: state.product.updateProductMsg,
    updateProductError: state.product.updateProductError,
    deleteProductLoading: state.product.deleteProductLoading,
    deleteProductMsg: state.product.deleteProductMsg,
    deleteProductError: state.product.deleteProductError,
});

const mapDispatchToProps = {
    getProduct, addProduct, updateProduct, deleteProduct
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Product);