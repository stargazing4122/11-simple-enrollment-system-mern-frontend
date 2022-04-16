import { Redirect, Route, Switch } from 'react-router-dom'
import { EnrollmentCourses, NoEnrollmentCourses } from '../../components/student/'

export const StudentRoutes = () => {
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
