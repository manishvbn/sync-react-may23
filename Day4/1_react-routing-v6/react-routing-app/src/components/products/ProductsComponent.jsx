import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './ProductsComponent.css';

const ProductsComponent = (props) => {
    return(
            <div>
                <h1 className="text-primary text-center">Products Component</h1>
                <div className="row mt-5">
                    <div className="col">
                        <div className="graybox">
                            <ul className="list-group">
                                {
                                    props.productsData.map(product => (
                                        <li className="list-group-item" key={product.id}>
                                            <Link to={`${product.id}`}>{product.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <Outlet />
                    </div>
                </div>
            </div >
        );
}

export default ProductsComponent;