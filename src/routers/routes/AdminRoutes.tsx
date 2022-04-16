
import { Redirect, Route, Switch } from 'react-router-dom'
import { ListEnrollments, ListUsers, ListCourses, RegisterUser } from '../../components/admin/';

export const AdminRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/admin/enrollments" component={ ListEnrollments } />
        <Route exact path="/admin/users" component={ ListUsers } />
        <Route exact path="/admin/courses" component={ ListCourses } />
        <Route exact path="/admin/register" component={ RegisterUser } />
        <Redirect to="/admin/enrollments" />
      </Switch>
    </>
  )
}
