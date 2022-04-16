import { Dispatch } from 'redux';
import Swal from 'sweetalert2';
import { EnrollmentCourse, NotEnrollmentCourse, StudentEnrollmentRes, StudentNoEnrollmentRes } from '../../interfaces/';
import { fetchWithToken } from '../../utils/';
import { State } from '../reducers/rootReducer';

// types
export type StudentActionType =
  | { 
      type: '[Student] - load enrollments & not enrollments'; 
      payload: {
        enrollments: EnrollmentCourse[];
        noEnrollments: NotEnrollmentCourse[];
      } 
    };


// synchronous actions
const doLoadNotAndEnrollments = ( enrollments: EnrollmentCourse[], noEnrollments: NotEnrollmentCourse[]): StudentActionType => ({
  type: '[Student] - load enrollments & not enrollments',
  payload: {
    enrollments,
    noEnrollments,
  }
})

// asynchronous actions
type Res = [StudentEnrollmentRes, StudentNoEnrollmentRes]
export const startLoadNotAndEnrollments = () => {
  return async( dispatch: Dispatch, getState: () => State ) => {
    const uid = getState().auth.user?.uid;
    try {
      const [ enrollmentsResp, noEnrollmentsResp ] = await Promise.all([
        fetchWithToken( `/courses/enrollment/${ uid}`),
        fetchWithToken( `/courses/no-enrollment/${ uid}`)
      ]);
      const [ enrollmentsBody, noEnrollmentsBody ]: Res = await Promise.all([
        enrollmentsResp.json(),
        noEnrollmentsResp.json(),
      ]);
      if( enrollmentsBody.ok && noEnrollmentsBody.ok ) {
        dispatch( doLoadNotAndEnrollments( 
          enrollmentsBody.enrollmentCourses, 
          noEnrollmentsBody.notEnrollmentCourses
        ));
      } else {
        if( !enrollmentsBody.ok ){
          Swal.fire('Error', enrollmentsBody.msg, 'error');
        }
        if( !noEnrollmentsBody.ok ){
          Swal.fire('Error', noEnrollmentsBody.msg, 'error');
        }
      }
    } catch (err) {
      Swal.fire('Error', 'An error ocurred while loading the enrollments', 'error');
      console.log(err)
    }
  }
}