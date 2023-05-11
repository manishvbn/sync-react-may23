import React, { Component } from 'react';
import { connect } from 'react-redux';
import productSelectors from '../../selectors/productSelectors';
import ProductFormComponent from '../../components/products/ProductFormComponent';

import * as productActions from '../../actions/productActions';

class ManageProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: { ...this.props.product }
        };
        this.updateState = this.updateState.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
    }

    updateState(e) {
        const field = e.target.name;
        let product = { ...this.state.product };
        product[field] = e.target.value;
        this.setState({ product: product });
    }

    saveProduct(e) {
        e.preventDefault();

        if (this.state.product.id) {
            this.props.updateProduct(this.state.product, () => {
                this.props.history.push('/products');
            });
        } else {
            this.props.insertProduct(this.state.product, () => {
                this.props.history.push('/products');
            });
        }
    }

    render() {
        return (
            <>
                <ProductFormComponent pageText={this.props.pText} product={this.state.product}
                    onChange={this.updateState} onSave={this.saveProduct} />
            </>
        );
    }
}

function mapStateToProps(state, ownProps) {
    let product = {
        id: "",
        name: "",
        description: "",
        status: ""
    };

    const productId = ownProps.match.params.id;

    if (productId && state.productsData.products.length > 0) {
        product = productSelectors.getProductById(state, ownProps);
    }

    var pText = product.id === "" ? "Create Product" : "Edit Product";

    return {
        pText, product
    };
}

function mapDispatchToProps(dispatch) {
    return {
        insertProduct: (product, cb) => { dispatch(productActions.insertProduct(product, cb)); },
        updateProduct: (product, cb) => { dispatch(productActions.updateProduct(product, cb)); }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProductContainer);