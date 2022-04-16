import { EnrollmentCourse, NotEnrollmentCourse } from '../../interfaces/';
import { StudentActionType } from '../actions/';


interface StudentState {
  enrollments: EnrollmentCourse[] | null;
  noEnrollments: NotEnrollmentCourse[] | null;
}

const initialState: StudentState = {
  enrollments: null,
  noEnrollments: null,
}


export const studentReducer = ( state: StudentState = initialState, action: StudentActionType): StudentState => {
  switch ( action.type ) {

    case '[Student] - load enrollments & not enrollments':
      return {
        ...state,
        enrollments: [ ...action.payload.enrollments ],
        noEnrollments: [ ...action.payload.noEnrollments ],
      }
  
    default:
      return state;
  }
  
}