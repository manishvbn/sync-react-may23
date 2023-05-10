import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import './ProductsComponent.css';

class ProductsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsData: [
                {
                    id: 1,
                    name: "Item One",
                    description:
                        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    status: "Available"
                },
                {
                    id: 2,
                    name: "Item Two",
                    description: "sunt aut facere ptio reprehenderit",
                    status: "Not Available"
                },
                {
                    id: 3,
                    name: "Item Three",
                    description: "provident occaecati excepturi optio reprehenderit",
                    status: "Available"
                },
                {
                    id: 4,
                    name: "Item Four",
                    description: "reprehenderit",
                    status: "Not Available"
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <h1 className="text-primary text-center">Products Component</h1>
                <div className="row mt-5">
                    <div className="col">
                        <div className="graybox">
                            <ul className="list-group">
                                {
                                    this.state.productsData.map(product => (
                                        <li className="list-group-item" key={product.id}>
                                            <Link to={`${this.props.match.url}/${product.id}`}>{product.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <Route exact path={this.props.match.url} render={
                            (props) => <ProductNotSelectedComponent />
                        } />

                        <Route exact path={`${this.props.match.url}/:productId`} render={
                            (props) => <ProductDetailsComponent data={this.state.productsData} {...props} />
                        } />
                    </div>
                </div>
            </div>
        );
    }
}

const ProductNotSelectedComponent = () => {
    return (
        <h2 className="text-warning">Please select a product</h2>
    );
}

const ProductDetailsComponent = ({ data, match }) => {
    let product = data.find(p => p.id === parseFloat(match.params.productId));

    let productView;

    if (product) {
        productView = (
            <>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <hr />
                <h4 className={product.status === 'Available' ? 'text-success' : 'text-danger'}>{product.status}</h4>
            </>
        );
    } else {
        productView = (<h3 className="text-danger">Product not found.</h3>);
    }

    return (
        <>
            <h2 className="text-warning">Product Details</h2>
            {productView}
        </>
    );
}

export default ProductsComponent;