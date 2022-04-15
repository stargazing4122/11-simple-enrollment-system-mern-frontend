
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomeScreen, LoginScreen } from '../pages';
import { State } from '../state/reducers/rootReducer';
import { startCheckAuth } from '../state/actions/authActions';


export const AppRouter = () => {
  // hooks
  const { isAuthCheck } = useSelector( (state: State) => state.auth );
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
        <Route path="/signin" component={ LoginScreen } />
        <Route path="/" component={ HomeScreen } />
      </Switch>
    </Router>
  )
}
