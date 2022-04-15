import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../state/actions/authActions';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch( startLogout() );
  }
  return (
    <div className="container">
      <h2> Home Screen 2</h2>
      <button
        type="button"
        className="btn btn-danger"
        onClick={ handleLogoutClick }
      >
        Logout
      </button>
    </div>
  )
}
