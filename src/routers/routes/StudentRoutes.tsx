import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { EnrollmentCourses, NoEnrollmentCourses } from '../../components/student/'
import { startLoadNotAndEnrollments } from '../../state/actions/';


export const StudentRoutes = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch( startLoadNotAndEnrollments() )
  }, [ dispatch ])

  return (
    <>
      <Switch>
        <Route 
          exact
          path="/student/enrollments"
          component={ EnrollmentCourses}
        />
        <Route 
          exact
          path="/student/noenrollments"
          component={ NoEnrollmentCourses }
        />
        <Redirect to="/student/enrollments" />
      </Switch>
    </>
  )
}
