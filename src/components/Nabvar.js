import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Nabvar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item active ">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {' '}
                About{' '}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Nabvar;
