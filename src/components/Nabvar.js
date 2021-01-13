import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Brand from '../resources/images/logo.png';

const Nabvar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-md py-4 navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img src={Brand} width="100" height="50" alt="" />
        </a>
        <div
          className="d-flex collapse navbar-collapse justify-content-end"
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
