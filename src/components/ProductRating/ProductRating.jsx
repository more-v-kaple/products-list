import React from 'react'
import Rate from 'antd/lib/rate';

import 'antd/lib/rate/style/css';
import './ProductRating.scss';

export default function ProductRating({
    item: { rating_reviews: { rating, reviews } },
    extended = false
}) {
  return (
    <div className="product-rating">
        <Rate disabled value={rating} allowHalf={true}/>
        {extended ?
        <span className="reviews link">{reviews} Customers</span>
        : <span className="reviews">{reviews}</span>
        }
    </div>
  )
}
