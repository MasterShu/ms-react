import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Home from '../pages/home/index';
import Product from '../pages/product';

export default () => [
  <Route path="/" render={() => <Redirect to="/home" />} exact key="root" />,
  <Route path="/home" component={Home} key="home" />,
  <Route path="/product" component={Product} key="product" />,
]
