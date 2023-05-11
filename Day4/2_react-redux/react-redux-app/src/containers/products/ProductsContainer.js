import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as productActions from '../../actions/productActions';
import LoaderAnimation from '../../components/common/LoaderAnimation';
import ProductListComponent from '../../components/products/ProductListComponent';
import AddProductButton from '../../components/products/AddProductButton';

class ProductsContainer extends Component {
    render() {
        return (
            <>
                {
                    this.props.flag
                        ? <>
                            <AddProductButton />
                            <hr />
                            <ProductListComponent products={this.props.products} />
                        </>
                        : <LoaderAnimation />
                }
            </>

            // <>
            //     <button className='btn btn-primary' onClick={(e) => {
            //         this.props.loadProducts();
            //     }}>Load Products</button>

            //     <AddProductButton />

            //     <ProductListComponent products={this.props.products} />
            // </>
        );
    }

    componentDidMount() {
        this.props.loadProducts();
    }
}

function mapStateToProps(state) {
    return {
        products: state.productsData.products,
        status: state.productsData.status,
        flag: state.productsData.flag
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadProducts: () => { dispatch(productActions.loadProducts()); }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);