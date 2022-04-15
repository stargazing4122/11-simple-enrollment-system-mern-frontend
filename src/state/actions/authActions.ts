import { Dispatch } from 'redux';
import Swal from 'sweetalert2';
import { UserAuth } from '../../interfaces/';
import { fetchWithoutToken } from '../../utils/';
import { LoginResponse } from '../../interfaces/';


//? TYPES
export type AuthActionType =
  |{ type: '[Auth] - sign in'; payload: UserAuth }
  |{ type: '[Auth] - sign out'; };

//? SYNCHRONOUS ACTIONS
const doSignin = ( uid: string, name: string, role: string ):AuthActionType => ({
  type: "[Auth] - sign in",
  payload: {
    uid,
    name,
    role
  }
});

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