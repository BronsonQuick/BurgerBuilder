import React, { useEffect, Suspense } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as actionTypes from './store/actions/index';
import {connect} from 'react-redux';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';

const Checkout = React.lazy( () => {
  return import('./containers/Checkout/Checkout');
});

const Orders = React.lazy( () => {
  return import('./containers/Orders/Orders');
});

const Auth = React.lazy( () => {
  return import('./containers/Auth/Auth');
});

function App (props) {
  const { onTryAutoSign } = props;
  useEffect(() => {
    onTryAutoSign();
  }, [onTryAutoSign]);
    let routes = (
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/auth" component={Auth} />
        <Redirect to="/" />
      </Switch>
    );

    if ( props.isAuthenticated ) {
      routes = (
        <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/auth" component={Auth} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/logout" component={Logout} />
      </Switch>
      );
    }
    return (
      <div>
        <Layout>
          <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
        </Layout>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSign: () => dispatch(actionTypes.authCheckState())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
