import ProductDetails from '../screen/ProductDetails';
import { connect } from 'react-redux';
import {  } from '../redux/actions';

/*========================================================
    * function Name: ProductDetails pages
    * function Purpose: called action and stored state
    * function Parameters: ProductDetails, mapStateToProps, dispatchers
    * function ReturnType: state
    * function Description: called action of dispatchers and stored state of mapStateToProps
    *=====================================================*/

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = {
    
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductDetails);