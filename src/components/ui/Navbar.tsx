import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { startLogout } from "../../state/actions";
import { State } from "../../state/reducers/rootReducer";

export const Navbar = () => {
  // hoooks
  const dispatch = useDispatch();
  const { user } = useSelector((state: State) => state.auth);

  //functions
  const handleLogoutClick = () => {
    dispatch(startLogout());
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      {/* LINKS */}
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink
            activeClassName="active" 
            className="nav-link font-weight-bold" 
            to="/"
          >
            HOME
          </NavLink>
        </li>
        {/* admin */}
        {
          user?.role === 'ADMIN_ROLE' &&
          (
            <>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/admin/enrollments"
                >
                  Enrollments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/admin/users"
                >
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/admin/courses"
                >
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/admin/register"
                >
                  Register
                </NavLink>
              </li>
            </>
          )
        }
        {/* professor */}
        {
          user?.role === 'PROFESSOR_ROLE' &&
          (
            <>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/professor/courses"
                >
                  Courses
                </NavLink>
              </li>
            </>
          )
        }
        {/* professor */}
        {
          user?.role === 'STUDENT_ROLE' &&
          (
            <>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/student/enrollments"
                >
                  Enrollments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/student/noenrollments"
                >
                  No Enrollments
                </NavLink>
              </li>
            </>
          )
        }
      </ul>

      {/* USER NAME & SIGNOUT BUTTON */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="mr-3"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <span className="mr-2 text-info text-size">
            USER: {user?.name.toUpperCase()}
          </span>
          <span className="text-info">ROLE: {user?.role.toLowerCase()}</span>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleLogoutClick}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
