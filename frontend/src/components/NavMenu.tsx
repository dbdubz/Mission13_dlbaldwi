import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <>
      <div className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-dark border-bottom box-shadow mb-3 text-center">
        <div className="container-fluid">
          <div className="col">
            <Link to="/" className="col navbar-brand text-white">
              Home
            </Link>
            <Link to="/podcasts" className="col navbar-brand text-white">
              Podcasts
            </Link>
            <Link to="/movies" className="col navbar-brand text-white">
              Movies
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
