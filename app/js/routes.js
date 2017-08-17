import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from './components/app'
import PhotoGrid from './components/photoGrid'
import Single from './components/single'
import createBrowserHistory from 'history/lib/createBrowserHistory';

const browserHistory = createBrowserHistory();
const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
		<IndexRoute component={PhotoGrid}></IndexRoute>
		<Route path="single" component={Single}></Route>
    </Route>
  </Router>
);

export default routes