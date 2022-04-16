
import { FC } from 'react';

import { Redirect, Route } from 'react-router-dom';

import { Role } from '../';



interface Props {
  component: () => JSX.Element;
  role: Role;
  path?: string;
  exact?: boolean;
}


export const ProfessorProtected: FC<Props> = ({ component: Component, role, ...rest }) => {
  return (
    <Route
      { ...rest }
      component={ (props: any) => (
        role === 'PROFESSOR_ROLE'
          ? <Component { ...props } />
          : <Redirect to="/" />
      )}
    />
  )
}