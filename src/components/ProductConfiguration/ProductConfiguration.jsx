import React from 'react';
import Button from 'antd/lib/button';

import 'antd/lib/button/style/css';
import './ProductConfiguration.scss';

export default ({ product }) => {
    return (
        <div className="product-configuration">
            {/* <div className="price">
                <span className="current-price">
                    AED {product.price}
                </span>
            </div>
            <Button type="primary">Add to Cart</Button> */}
        </div>
    )
};
