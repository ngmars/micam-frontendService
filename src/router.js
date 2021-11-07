import React, { lazy, Suspense } from 'react';
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { Spin } from 'antd';
import ErrorBoundary from './ErrorBoundary';
import { PUBLIC_ROUTE } from './route.constants';


const Dashboard = lazy(() => import('./Containers/Dashboard/Dashboard'));

const publicRoutes = [

  {
    path: PUBLIC_ROUTE.SIGN_IN,
    component: lazy(() => import('./Containers/Pages/SignIn/SignIn')),
  }
];

function PrivateRoute({ children, ...rest }) {
  //const isLoggedIn = useSelector(state => state.Auth.idToken);
   const isLoggedIn = true;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default function Routes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spin />}>
        <Router>
          <Switch>
         {publicRoutes.map((route, index) =>(
                
              <Route key={index} path={route.path}>
                <route.component />
              </Route>
            ))} 

            <PrivateRoute path="/">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </Router>
      </Suspense>
      </ErrorBoundary>
  );
}
