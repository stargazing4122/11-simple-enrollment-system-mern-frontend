import { Dispatch } from 'redux';
import Swal from 'sweetalert2';

import { fetchWithoutToken, fetchWithToken } from '../../utils/';
import { LoginResponse, UserAuth, ValidateAuth } from '../../interfaces/';
import { doCleanStudentState } from './studentActions';
import { doCleanAdminState } from './adminActions';
import { doCleanProfessorState } from './professorActions';


//? TYPES
export type AuthActionType =
  |{ type: '[Auth] - sign in'; payload: UserAuth }
  |{ type: '[Auth] - sign out'; }
  |{ type: '[Auth] - set checkAuth'; }

//? SYNCHRONOUS ACTIONS
const doSignin = ( uid: string, name: string, role: string ):AuthActionType => ({
  type: "[Auth] - sign in",
  payload: {
    uid,
    name,
    role
  }
});

const doSetCheckAuth = (): AuthActionType => ({
  type: '[Auth] - set checkAuth',
})

const doSignout = (): AuthActionType => ({
  type: "[Auth] - sign out",
});

//? ASYNCHRONOUS ACTIONS
export const startLogin = ( email: string, password: string) => {

  return async( dispatch: Dispatch ) => {
    try {

      const resp = await fetchWithoutToken('/auth/login', {email, password}, 'POST');
      const body = await resp.json() as LoginResponse;

      if( body.ok ) {
        localStorage.setItem('token-enrollment-mern', body.token);
        dispatch( doSignin( 
          body.person.uid, 
          body.person.name, 
          body.person.role.name
        ));
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
      
    } catch (err) {
      console.log(err);
      Swal.fire('Error', 'Something went wrong', 'error');
    }
  }
}

export const startCheckAuth = () => {
  return async( dispatch: Dispatch) => {
    try {
      const resp = await fetchWithToken('/auth/renew');
      const body = await resp.json() as ValidateAuth;

      if( body.ok ) {
        localStorage.setItem('token-enrollment-mern', body.token);
        dispatch( doSignin(
          body.person.uid,
          body.person.name,
          body.person.role.name,
        ));
      } else {
        dispatch( doSetCheckAuth() );
      }
    } catch (err) {
      console.log(err);
      Swal.fire('Error', 'Something went wrong', 'error');
    }
  }
}

export const startLogout = () => {
  return ( dispatch: Dispatch ) => {
    localStorage.removeItem('token-enrollment-mern');
    dispatch( doSignout() );
    dispatch( doCleanStudentState());
    dispatch( doCleanAdminState() );
    dispatch( doCleanProfessorState() );
  }
}