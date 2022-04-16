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
        ...action.payload,
      }

    case '[Student] - enroll':
      return {
        ...state,
        enrollments: [ 
          ...(state.enrollments) as EnrollmentCourse[], 
          {...action.payload}
        ],
        noEnrollments: (state.noEnrollments?.filter( 
          course => course.id !== action.payload.id 
        )) as NotEnrollmentCourse[]
      }

    case '[Student] - clean state':
      return {
        ...initialState
      }
  
    default:
      return state;
  }
  
}