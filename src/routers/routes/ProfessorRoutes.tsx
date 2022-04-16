import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ProfessorCourses, ProfessorCourse } from '../../components/professor/';
import { startLoadProfessorCourses } from '../../state/actions/';


export const ProfessorRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch( startLoadProfessorCourses() );
  }, [ dispatch ])
  return (
    <>
      <Switch>
        <Route 
          exact
          path="/professor/courses"
          component={ ProfessorCourses}
        />
        <Route 
          exact
          path="/professor/courses/:courseid"
          component={ ProfessorCourse }
        />
        <Redirect to="/professor/courses"/>
      </Switch>
    </>
  )
}
