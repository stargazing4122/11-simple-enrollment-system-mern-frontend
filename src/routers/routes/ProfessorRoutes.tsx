import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ProfessorCourses, ProfessorCourse } from '../../components/professor/'


export const ProfessorRoutes = () => {
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
