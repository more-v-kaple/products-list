import React from 'react';
import { connect } from 'react-redux';

import { getProductList } from '../../redux/selectors/products';

import ProductListItem from '../../components/ProductListItem';
import Header from '../../components/ProductListHeader';

import './ProductList.scss';

const ProductList = ({ list }) => (
    <div className="product-list">
        <Header/>
        <div className="list">
            {
                list.map(item => (
                    <ProductListItem item={item} key={item.objectID}/>
                ))
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    list: getProductList(state)
});

export default connect(mapStateToProps)(ProductList);
