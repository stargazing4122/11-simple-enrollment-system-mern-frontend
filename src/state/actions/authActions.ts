

//? TYPES
export type AuthActionType =
  |{ type: '[Auth] - sign in'; payload: { uid: string; name: string; role: string} }
  |{ type: '[Auth] - sign out'; };

//? SYNCHRONOUS ACTIONS
export const doSignin = ( uid: string, name: string, role: string ):AuthActionType => ({
  type: "[Auth] - sign in",
  payload: {
    uid,
    name,
    role,
  }
});

export const doSignout = (): AuthActionType => ({
  type: "[Auth] - sign out",
});

//? ASYNCHRONOUS ACTIONS