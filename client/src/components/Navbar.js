import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Logout } from '../redux/actions/authActions';

function Navbar({ user }) {
  const dispatch = useDispatch()
  const LogoutHandler = () => {
    dispatch(Logout())

  }
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#"></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                user.role === "ADMIN" ? (
                  <li className="nav-item">
                    <Link className="nav-link active" to="#">Admin</Link>
                  </li>
                ) : ""
              }
            </ul>
            <div className="d-flex align-items-center">
              <div className="mx-2">
                <span className="text-Teal-50">Bouaouina</span>
              </div>
              <div className="mx-2">
                {
                  user.isConnected ? (
                    <>
                      <Link className="btn btn-outline-white text-white" to="/login">
                        Login
                      </Link>
                      <Link className="btn btn-outline-white text-white" to="/register">
                        Register
                      </Link>
                    </>
                  ) : (
                    <Link className="btn btn-outline-white text-white" to='#' onClick={LogoutHandler}>
                      Logout
                    </Link>

                  )
                }



              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
