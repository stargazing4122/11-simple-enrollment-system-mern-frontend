
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { HomeScreen } from '../pages/';
import { State } from '../state/reducers/rootReducer';
import { AdminProtected, StudentProtected, ProfessorProtected } from './protected/';
import { AdminRoutes, StudentRoutes, ProfessorRoutes } from './routes/';
import { Navbar } from '../components/ui/';


export type Role = 'STUDENT_ROLE' | 'PROFESSOR_ROLE' | 'ADMIN_ROLE' | '';


export const DashboardRoutes = () => {
  const { user } = useSelector( (state: State) => state.auth );
  const role: Role = (user?.role || '') as Role;

  return (
    <div>
      <Navbar />
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            component={ HomeScreen }
          />
          <AdminProtected
            path="/admin"
            component={ AdminRoutes }
            role={ role }
          />
          <StudentProtected
            path="/student"
            component={ StudentRoutes }
            role={ role }
          />
          <ProfessorProtected
            path="/professor"
            component={ ProfessorRoutes }
            role={ role }
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  )
}
