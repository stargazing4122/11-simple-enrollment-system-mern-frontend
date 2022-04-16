import { combineReducers } from 'redux';
import { adminReducer } from './adminReducer';
import { authReducer } from './authReducer';
import { studentReducer } from './studentReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  student: studentReducer,
  admin: adminReducer
});

export type State = ReturnType<typeof rootReducer>