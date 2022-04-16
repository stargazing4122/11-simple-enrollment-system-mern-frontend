import { Course, Matricula, Person } from '../../interfaces/';
import { AdminActionType } from '../actions/';


interface AdminState {
  enrollments: Matricula[] | null;
  users: Person[] | null;
  courses: Course[] | null;
}

const initialState: AdminState = {
  enrollments: null,
  users: null,
  courses: null,
}


export const adminReducer = ( state: AdminState = initialState, action: AdminActionType): AdminState => {
  switch ( action.type ) {
    case '[Admin] - Load enrollments, courses, users':
      return {
        ...state,
        ...action.payload
      }

    case '[Admin] - Clean admin state':
      return {
        ...initialState,
      }
  
    default:
      return state;
  }
  
}