
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ListEnrollments, ListUsers, ListCourses, RegisterUser } from '../../components/admin/';
import { startLoadEnrollmentsCoursesUsers } from '../../state/actions/';


export const AdminRoutes = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch( startLoadEnrollmentsCoursesUsers() );
  }, [ dispatch ])
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
