import React from 'react'

import ProductConfiguration from '../ProductConfiguration';
import ProductSummary from '../ProductSummary';

export default function ProductInfo({ product }) {
  return (
    <div className="product-info">
        <ProductSummary product={product}/>
        <ProductConfiguration product={product}/>
    </div>
  )
}
