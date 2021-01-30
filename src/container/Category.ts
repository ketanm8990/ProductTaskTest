import Category from '../screen/Category';
import { connect } from 'react-redux';
import { getCategory, addCategory, updateCategory, deleteCategory } from '../redux/actions';

/*========================================================
    * function Name: Category pages
    * function Purpose: called action and stored state
    * function Parameters: Category, mapStateToProps, dispatchers
    * function ReturnType: state
    * function Description: called action of dispatchers and stored state of mapStateToProps
    *=====================================================*/

const mapStateToProps = (state: any) => ({
    categoryLoading: state.category.categoryLoading,
    categoryList: state.category.categoryList,
    categoryError: state.category.categoryError,
    addcategoryLoading: state.category.addcategoryLoading,
    addcategoryMsg: state.category.addcategoryMsg,
    addcategoryError: state.category.addcategoryError,
    updatecategoryLoading: state.category.updatecategoryLoading,
    updatecategoryMsg: state.category.updatecategoryMsg,
    updatecategoryError: state.category.updatecategoryError,
    deletecategoryLoading: state.category.deletecategoryLoading,
    deletecategoryMsg: state.category.deletecategoryMsg,
    deletecategoryError: state.category.deletecategoryError,
});

const mapDispatchToProps = {
    getCategory, addCategory, updateCategory, deleteCategory
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Category);