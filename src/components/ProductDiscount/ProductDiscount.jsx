import React from 'react'

import './ProductDiscount.scss';

export default function ProductDiscount({ item: { regular_price, discount }}) {
  return (
    <div className="product-discount">
        <span className="price">AED {regular_price}</span>
        <span className="discount">Save {discount}%</span>
    </div>
  )
}
