import { Dispatch } from 'redux';
import Swal from 'sweetalert2';

import { AdminCoursesRes, AdminEnrollmentsRes, AdminUsersRes, FullAdminState } from '../../interfaces';
import { fetchWithToken } from '../../utils/';


// types
export type AdminActionType =
  | { 
      type: '[Admin] - Load enrollments, courses, users'; 
      payload: FullAdminState
    }

// synchronous actions
const doLoadEnrollmentsCoursesUsers = ( enrollmentUsersCourses: FullAdminState ): AdminActionType => ({
  type: '[Admin] - Load enrollments, courses, users',
  payload: enrollmentUsersCourses,
})


// asynchronous actions

type Res = [ AdminEnrollmentsRes, AdminUsersRes, AdminCoursesRes];
export const startLoadEnrollmentsCoursesUsers = () => {
  return async( dispatch: Dispatch) => {
    try {
      const [ enrollmentsResp, usersResp, coursesResp ] = await Promise.all([
        fetchWithToken( '/enrollment'),
        fetchWithToken( '/persons'),
        fetchWithToken( '/courses'),
      ]);

      const [ enrollmentsBody, usersBody, coursesBody]: Res = await Promise.all([
        enrollmentsResp.json(),
        usersResp.json(),
        coursesResp.json(),
      ]);

      if( enrollmentsBody.ok && usersBody.ok && coursesBody.ok ) {
        dispatch( doLoadEnrollmentsCoursesUsers({
          enrollments: enrollmentsBody.matriculas,
          users: usersBody.people,
          courses: coursesBody.courses,
        }));
      } else {
        if( !enrollmentsBody.ok ){
          Swal.fire('Error', enrollmentsBody.msg, 'error');
        }
        if( !usersBody.ok ){
          Swal.fire('Error', usersBody.msg, 'error');
        }
        if( !coursesBody.ok ){
          Swal.fire('Error', coursesBody.msg, 'error');
        }
      }

    } catch (err) {
      Swal.fire('Error', 'An error ocurred while loading the data for admin', 'error');
      console.log(err)
    }
  }
}