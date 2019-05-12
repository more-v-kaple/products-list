import {
    FETCH_PRODUCTS
} from '../types';

const initialState = {
    items: {},
    params: {
        total: null
    }
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:

            return {
                ...initialState,
                items: action.payload.items,
                params: {
                    total: action.payload.total
                }
            };
        default:
            return state;
    }
};

export default products;
