import { FormEvent } from "react";
import { useDispatch } from "react-redux";

import { useForm } from "../hooks";
import { startLogin } from '../state/actions/authActions';


interface FormData {
  email: string;
  password: string;
}
const initialForm: FormData = {
  email: '@user.com',
  password: '123456',
}

export const LoginScreen = () => {
  // hooks
  const { formValues, handleInputChange } = useForm<FormData>( initialForm );
  const { email, password } = formValues;

  const dispatch = useDispatch();

  // functions
  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch( startLogin( email, password ) );
  }

  return (
    <div className="container login-container">
      <div className="col-md-6 login-form-1">
        <h3>Ingreso</h3>
        <form onSubmit={ handleLoginSubmit }>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Correo"
              name="email"
              value={ email }
              onChange={ handleInputChange }
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              name="password"
              value={ password }
              onChange={ handleInputChange }
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btnSubmit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};
