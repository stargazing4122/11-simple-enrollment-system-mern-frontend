import { Dispatch } from 'redux';
import Swal from 'sweetalert2';

import { AdminCoursesRes, AdminEnrollmentsRes, AdminRegisterUserRes, AdminUsersRes, FullAdminState,  } from '../../interfaces';
import { fetchWithToken } from '../../utils/';


// types
export type AdminActionType =
  | { 
      type: '[Admin] - Load enrollments, courses, users'; 
      payload: FullAdminState
    }
  |{ type: '[Admin] - Clean admin state'; }

// synchronous actions
const doLoadEnrollmentsCoursesUsers = ( enrollmentUsersCourses: FullAdminState ): AdminActionType => ({
  type: '[Admin] - Load enrollments, courses, users',
  payload: enrollmentUsersCourses,
});

export const doCleanAdminState = (): AdminActionType => ({
  type: '[Admin] - Clean admin state',
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

export const startRegisterUser = ( name: string, email: string, password: string, role: string ) => {
  return async() => {
    try {
      const resp = await fetchWithToken( 
        '/persons',
        { name, email, password, role },
        'POST'
      );
      const body = await resp.json() as AdminRegisterUserRes;

      if( body.ok ) {
        Swal.fire('Success', body.msg, 'success');
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (err) {
      Swal.fire('Error', 'An error ocurred while loading the data for admin', 'error');
      console.log(err);
    }
  }
}