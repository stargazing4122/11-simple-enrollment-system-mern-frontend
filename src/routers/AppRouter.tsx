
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { LoginScreen } from '../pages/';
import { State } from '../state/reducers/rootReducer';
import { startCheckAuth } from '../state/actions/authActions';
import { DashboardRoutes } from './';
import { PublicRoute , PrivateRoute} from './protected/';


export const AppRouter = () => {
  // hooks
  const { isAuthCheck, user } = useSelector( (state: State) => state.auth );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( startCheckAuth() );
  }, [ dispatch ])

  if( !isAuthCheck ) {
    return <h1> loading...</h1>
  }

  return (
    <Router>
      <Switch>
        <PublicRoute 
          exact
          path="/signin" 
          component={ LoginScreen } 
          isAuth={ !!user }
        />
        <PrivateRoute
          path="/" 
          component={ DashboardRoutes } 
          isAuth={ !!user }
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}
