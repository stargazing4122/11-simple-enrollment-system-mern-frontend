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

    case '[Auth] - sign in':
      return {
        ...state,
        isAuthCheck: true,
        user: { ...action.payload },
      }
  
    default:
      return state;
  }
  
}