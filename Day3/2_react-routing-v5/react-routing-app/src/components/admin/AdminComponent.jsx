import React, { Component } from 'react';
import DataTable from '../common/DataTable';

import productApiClient from '../../services/product-api-client';

class AdminComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [], message: "Loading Data, please wait..." };
    }
    
    render() {
        return (
            <div className="text-center">
                <h1 className="text-primary">Admin Component</h1>
                <h4 className="text-success mb-5">Welcome, you are an authenticated user.</h4>
                <hr />
                <h3 className="text-danger">{this.state.message}</h3>

                <DataTable items={this.state.products}>
                    <h4 className="text-primary text-uppercase font-weight-bold">Products Table</h4>
                </DataTable>
            </div>
        );
    }

    componentDidMount() {
        productApiClient.getAllProducts().then(data => {
            this.setState({ products: [...data], message: "" });
        }).catch(eMsg => {
            this.setState({ message: eMsg });
        });
    }
    
}

export default AdminComponent;