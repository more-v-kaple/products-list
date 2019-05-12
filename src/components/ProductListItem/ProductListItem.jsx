import React from 'react';
import { Link } from 'react-router-dom';

import ProductRating from '../ProductRating';

import './ProductListItem.scss';
import ProductDiscount from '../ProductDiscount/ProductDiscount';

export default ({ item }) => {
    const {
        post_title,
        objectID,
        discount,
        images,
        price
    } = item;

    return (
        <Link to={`/product/${objectID}`}>
            <div className="product-list-item">
                <img src={images} className="product-list-item__preview" alt={post_title}/>
                <span className="product-list-item__name">{post_title}</span>
                <ProductRating item={item}/>
                <div className="product-list-item__price">
                    {
                        discount && <ProductDiscount item={item}/>
                    }
                    <span className="new-price">AED {price}</span>
                </div>
            </div>
        </Link>
    )
}