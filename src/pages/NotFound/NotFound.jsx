import React from 'react';
import { Link } from 'react-router-dom';

import './NoFound.scss';

const NotFound = () => (
        <div className="not-found">
            <img src="https://uae.sharafdg.com/wp-content/themes/sdg/assets/images/404.svg" alt="not found"/>
            <span className="title">Oops! Page not found!</span>
            <span>The link you clicked may be broken or the page may have been removed.</span>
            <span>Back to <Link to="/">Home Page</Link></span>
        </div>
);

export default NotFound;
