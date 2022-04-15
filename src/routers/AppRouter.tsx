
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomeScreen, LoginScreen } from '../pages';


export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={ LoginScreen } />
        <Route path="/" component={ HomeScreen } />
      </Switch>
    </Router>
  )
}
