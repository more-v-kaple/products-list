import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { fetchProducts } from '../redux/middlewares/products';

import PageProductsList from '../pages/ProductList';
import PageProductDetails from '../pages/ProductDetails';
import PageNotFound from '../pages/NotFound';

class Main extends Component {
  componentDidMount() {
    const { fetchProducts } = this.props;

    fetchProducts();
  }

  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ PageProductsList } />
          <Route path="/product/:id" component={ PageProductDetails } />
          <Route component={ PageNotFound } />
        </Switch>
      </Router>
    );
  }
}

export default connect(null, { fetchProducts })(Main);
