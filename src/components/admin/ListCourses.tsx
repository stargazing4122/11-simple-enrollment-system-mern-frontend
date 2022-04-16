import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../state/reducers/rootReducer';

export const ListCourses = () => {
  const { courses } = useSelector( (state: State) => state.admin );
  return (
    <div>
      <h2> All Course</h2>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Course</th>
            <th>Professor</th>
          </tr>
        </thead>
        <tbody>
          {
            courses?.map( course => (
              <tr key={ course.id }>
                <td>{ course.id}</td>
                <td>{ course.name }</td>
                <td>{ course.professor.name }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
