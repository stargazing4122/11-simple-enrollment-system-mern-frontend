import { ProfessorCourse } from '../../interfaces/';
import { ProfessorActionType } from '../actions';


interface ProfessorState {
  courses: ProfessorCourse[] | null;
}

const initialState: ProfessorState = {
  courses: null,
}


export const professorReducer = ( state: ProfessorState = initialState, action: ProfessorActionType): ProfessorState => {
  switch ( action.type ) {

    case '[Professor] - Load all courses of professor':
      return {
        ...state,
        courses: [ ...action.payload ],
      }
    
    case '[Professor] - Clean Professor State':
      return {
        ...initialState,
      }
  
    default:
      return state;
  }
  
}