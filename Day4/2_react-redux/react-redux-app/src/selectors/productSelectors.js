import { createSelector } from 'reselect';

const getProducts = (state, props) => state.productsData.products;
const getId = (state, props) => props.match.params.id;

const productSelectors = {
    getProductById: createSelector(getProducts, getId, function (products, id) {
        const product = products.find(p => p.id === parseInt(id));
        return product;
    })
};

export default productSelectors;