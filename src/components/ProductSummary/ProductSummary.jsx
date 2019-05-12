import React from 'react';
import Tabs from 'antd/lib/tabs';

import ProductRating from '../ProductRating';

import 'antd/lib/tabs/style/css';
import './ProductSummary.scss';

const TabPane = Tabs.TabPane;

export default ({ product }) => {
    const {
        post_title,
        images
    } = product;

    return (
        <div className="product-summary">
            <h1 className="name">{post_title}</h1>
            <ProductRating item={product} extended/>
            <img src={images} className="preview" alt={post_title}/>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Details" key="1">Details about {post_title} here</TabPane>
                <TabPane tab="Specifications" key="2">Specifications about {post_title} here</TabPane>
                <TabPane tab="Reviews" key="3">Reviews about {post_title} here</TabPane>
                <TabPane tab="Questions & Answers" key="4">"Questions & Answers about {post_title} here</TabPane>
            </Tabs>
        </div>
    )
}
