import { UserAuth } from '../../interfaces';
import { AuthActionType } from '../actions';


interface AuthState {
  isAuthCheck: boolean;
  user: UserAuth | null;
}

const initialState: AuthState = {
  isAuthCheck: false,
  user: null,
}


export const authReducer = ( state: AuthState = initialState, action: AuthActionType): AuthState => {
  switch ( action.type ) {
  
    default:
      return state;
  }
  
}