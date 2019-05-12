import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../redux/store/configureStore';

import Main from './Main';

const store = configureStore();

export default () => (
    <Provider store = { store }>
      <div className="app">
        <Main/>
      </div>
    </Provider>
);
