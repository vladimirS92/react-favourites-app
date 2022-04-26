import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import ProductList from './components/Products/ProductList';
import FavouritesList from './components/Favourites/FavouritesList';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/products' />
        </Route>
        <Route path='/products' exact component={ProductList} />
        <Route path='/favourites' exact component={FavouritesList} />
      </Switch>
    </Layout>
  );
}

export default App;
