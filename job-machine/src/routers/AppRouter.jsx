import { Basket } from '@/components/basket';
import { Footer, Navigation } from '@/components/common';
import * as ROUTES from '@/constants/routes';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import * as view from '@/views';
// import AdminRoute from './AdminRoute';
// import ClientRoute from './ClientRoute';
import PublicRoute from './PublicRoute';


export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <>
      <Navigation />
      <Basket />
      <Switch>
        <Route
          component={view.Search}
          exact
          path={ROUTES.SEARCH}
        />
        <PublicRoute component={view.PageNotFound} />
      </Switch>
      <Footer />
    </>
  </Router>
);

export default AppRouter;
