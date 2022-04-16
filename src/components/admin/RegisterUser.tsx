import React, { FormEvent } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useForm } from "../../hooks";
import { startRegisterUser } from "../../state/actions/";


interface FormData {
  name: string;
  email: string;
  role: string;
  password1: string;
  password2: string;
}

const initialForm: FormData = {
  name: '',
  email: '@user.com',
  role: '623561a4eaa47188e4c7781f',
  password1: '123456',
  password2: '123456',
}
export const RegisterUser = () => {
  // hooks 
  const { formValues, handleInputChange, resetForm } = useForm( initialForm);
  const { name, email, role, password1, password2 } = formValues;
  const dispatch = useDispatch();

  // functions 
  const handleRegisterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if( password1 !== password2 ){
      Swal.fire('Error', 'Passwords are not equals', 'error');
      return;
    }
    dispatch( startRegisterUser( name, email, password1, role) );
  }
  return (
    <div className="container login-container">
      <div className="col-md-6 login-form-2">
        <h3>Register a user</h3>
        <form onSubmit={ handleRegisterSubmit }>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Name" 
              name="name"
              value={ name }
              onChange={ handleInputChange }
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              className="form-control" 
              placeholder="email@user.com" 
              name="email"
              value={ email }
              onChange={ handleInputChange }
            />
          </div>
          {/* radio */}
          <div className="mb-3">
            <div className="form-check form-check-inline">
              <span className="mr-3">Role: </span>
              <input
                className="form-check-input"
                type="radio"
                id="inlineCheckbox1"
                value="623561a4eaa47188e4c7781f"
                name="role"
                onChange={ handleInputChange }
                checked={ role === '623561a4eaa47188e4c7781f'}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Student
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="inlineCheckbox2"
                value="623561bdeaa47188e4c77821"
                name="role"
                onChange={ handleInputChange }
                checked={ role === '623561bdeaa47188e4c77821'}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                Professor
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="inlineCheckbox3"
                value="623561d2eaa47188e4c77823"
                name="role"
                onChange={ handleInputChange }
                checked={ role === '623561d2eaa47188e4c77823'}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox3">
                Admin
              </label>
            </div>
          </div>

          {/* radio fin */}
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password1"
              value={ password1 }
              onChange={ handleInputChange }
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Repeat password"
              name="password2"
              value={ password2 }
              onChange={ handleInputChange }
            />
          </div>

          <div className="form-group">
            <input 
              type="submit" 
              className="btnSubmit" 
              value="Crear cuenta" 
            />
            <input 
              type="button" 
              className="btn2" 
              value="Reset Form"
              onClick={ resetForm } 
            />
          </div>
        </form>
      </div>
    </div>
  );
};
