import { Dispatch } from 'redux';
import Swal from 'sweetalert2';

import { ProfessorCourse, ProfessorCoursesRes } from '../../interfaces/';
import { fetchWithToken } from '../../utils/';
import { State } from '../reducers/rootReducer';


// TYPE
export type ProfessorActionType =
  | { 
      type: '[Professor] - Load all courses of professor';
      payload: ProfessorCourse[]; 
    }
  |{ type: '[Professor] - Clean Professor State'; }


// SYNCHRONOUS ACTIONS
const doLoadProfessorCourses = ( courses: ProfessorCourse[] ): ProfessorActionType=> ({
  type: '[Professor] - Load all courses of professor',
  payload: courses,
});

export const doCleanProfessorState = (): ProfessorActionType => ({
  type: '[Professor] - Clean Professor State',
})


// ASYNCHRONOUS ACTIONS
export const startLoadProfessorCourses = () => {
  return async( dispatch: Dispatch, getState: () => State ) => {

    const uid = getState().auth.user?.uid || '';

    try {
      const resp = await fetchWithToken(`/courses/professor/${ uid }`);
      const body = await resp.json() as ProfessorCoursesRes;

      if ( body.ok ){

        const courses: ProfessorCourse[] = body.cursos.map( course => ({
          id: course.id,
          courseName: course.name,
        }));

        dispatch( doLoadProfessorCourses( courses ) );

      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (err) {

      Swal.fire('Error', 'An error ocurred while loading the courses', 'error');
      console.log(err);
      
    }
  }
}