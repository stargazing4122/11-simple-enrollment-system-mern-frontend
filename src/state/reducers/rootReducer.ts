import { combineReducers } from 'redux';
import { adminReducer } from './adminReducer';
import { authReducer } from './authReducer';
import { studentReducer } from './studentReducer';
import { professorReducer } from './professorReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  student: studentReducer,
  admin: adminReducer,
  professor: professorReducer
});

export type State = ReturnType<typeof rootReducer>