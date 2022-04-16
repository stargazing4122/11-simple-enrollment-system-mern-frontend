import React from 'react';

import { useSelector } from 'react-redux';

import { State } from '../../state/reducers/rootReducer';


export const ProfessorCourses = () => {

  const { courses } = useSelector( (state: State) => state.professor );

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
