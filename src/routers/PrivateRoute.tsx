
import { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  component: () => JSX.Element;
  isAuth: boolean;
  path?: string;
  exact?: boolean;
}
export const PrivateRoute: FC<Props> = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route 
      { ...rest }
      render={ (props: any) => (
        isAuth
          ? <Component { ...props } />
          : <Redirect to="/signin"/>
      )}
    />
  )
}
