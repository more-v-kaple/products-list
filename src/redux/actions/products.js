import {
    FETCH_PRODUCTS
} from '../types';

export const fetchProducts = payload => ({
    type: FETCH_PRODUCTS,
    payload
})
