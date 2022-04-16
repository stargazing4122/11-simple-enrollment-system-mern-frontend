
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { startLogout } from '../../state/actions';
import { State } from '../../state/reducers/rootReducer';


export const Navbar = () => {

  // hoooks
  const dispatch = useDispatch();
  const { user} = useSelector( (state: State) => state.auth );

  //functions
  const handleLogoutClick = () => {
    dispatch( startLogout() );
  }

  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <div 
          className="mr-3"
          style={{ display: 'flex', flexDirection: 'column'}}>
          <span className="mr-2 text-info text-size">
            USER: { user?.name.toUpperCase()}
          </span>
          <span className="text-info">
            ROLE: { user?.role.toLowerCase() }
          </span>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={ handleLogoutClick }
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}
