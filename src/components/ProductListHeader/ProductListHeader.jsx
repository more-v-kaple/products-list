import React from 'react'
import { connect } from 'react-redux';

import { getSearchParams } from '../../redux/selectors/products';

import './ProductListHeader.scss';

const ProductListHeader = ({ total }) => {
  return (
    <div className="product-list-header">
      <span>{total} results for <span className="keyword">"Apple"</span>
      </span>
    </div>
  )
}

const  mapStateToProps = state => {
    return {
        ...getSearchParams(state)
    }
}

export default connect(mapStateToProps)(ProductListHeader);
