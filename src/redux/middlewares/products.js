import { fetchProducts as fetchProductsAction } from '../actions/products';

import productsJSON from '../../mocks/product_lists.json';

export const fetchProducts = () => async (dispatch, getState) => {
    const items = productsJSON.results[0].hits.reduce((acc, current) => {
        acc[current.objectID] = current;

        return acc;
    }, {});
    const payload = {
        items,
        total: productsJSON.results[0].nbHits
    }
    dispatch(fetchProductsAction(payload));
}