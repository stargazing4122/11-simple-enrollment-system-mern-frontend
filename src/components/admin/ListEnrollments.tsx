import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../state/reducers/rootReducer';

export const ListEnrollments = () => {

  const { enrollments } = useSelector( (state: State) => state.admin );
  return (
    <div>
      <h2> All Enrollments</h2>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {
            enrollments?.map( enrollment => (
              <tr key={ enrollment.id }>
                <td>{ enrollment.id}</td>
                <td>{ enrollment.student.name }</td>
                <td>{ enrollment.course.name }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
