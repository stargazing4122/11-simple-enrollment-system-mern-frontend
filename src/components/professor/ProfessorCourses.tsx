import React from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { State } from '../../state/reducers/rootReducer';


export const ProfessorCourses = () => {

  // hooks
  const { courses } = useSelector( (state: State) => state.professor );
  const history = useHistory()
  // functions
  const handleEnrolledButtonClick = ( courseId: string ) => {
    history.push(`/professor/courses/${ courseId }`)
  }
  return (
    <>
      <h2> Courses you teach</h2>
      <table className="table table-dark table-collapse">
        <thead>
          <tr>
            <th>Course ID </th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            courses?.map( course => (
              <tr key={ course.id }>
                <td>{ course.id }</td>
                <td>{ course.courseName }</td>
                <td>
                  <button 
                    onClick={ () => handleEnrolledButtonClick( course.id) }
                    type="button"
                    className="btn btn-outline-success"
                  >
                    Enrolled
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}
