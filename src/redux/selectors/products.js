export const getProductById = (state, id) => state.products.items[id];

export const getProductList = state => Object.values(state.products.items);

export const getSearchParams = state => ({
    total: state.products.params.total
});
