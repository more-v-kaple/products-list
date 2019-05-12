import React, { useEffect  } from 'react';
import { connect } from 'react-redux';

import { getProductById } from '../../redux/selectors/products';

import ProductInfo from '../../components/ProductInfo';

import './ProductDetails.scss';

const ProductDetails = ({ product, id }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
      });

    return product ?
        <div className="product-details">
            <ProductInfo product={product}/>
        </div>
        : <div className="product-not-found">
            <span>Sorry, product details for product with id - "{id}" currently weren't found.</span>
        </div>
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;

    return {
        id,
        product: getProductById(state, id)
    }
}

export default connect(mapStateToProps)(ProductDetails);
