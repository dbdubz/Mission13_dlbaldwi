import React from 'react';
import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <React.Fragment>
      <center>
        <Link to="/">Home</Link>
        <Link to="/podcasts">Podcasts</Link>
        <Link to="/movies">Movies</Link>
      </center>
    </React.Fragment>
  );
}
