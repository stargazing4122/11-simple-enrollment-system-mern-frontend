import React from 'react'
import { useSelector } from 'react-redux';
import { State } from '../../state/reducers/rootReducer';
import { CourseRow } from './';

export const NoEnrollmentCourses = () => {
  const { noEnrollments } = useSelector( (state: State) => state.student );
  return (
    <>
      <h2>Enrollment Courses</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Course</th>
            <th>Professor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            noEnrollments?.map( course => (
              <CourseRow
                key={ course.id }
                course={ course }
              />
            ))
          }
        </tbody>
      </table>
    </>
  )
}
