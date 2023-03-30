import React from 'react';
import { Link } from 'react-router-dom';
import image from '../JoelHiltonHeadshot.jpg';

export default function Home() {
  return (
    <div>
      <center>
        <img src={image} alt="Joel Hilton"></img>
        <p>
          This website highlights movies from{' '}
          <Link to="/movies">Joel Hilton's collection</Link>
        </p>
        <p>
          You can also check out his podcast <Link to="/podcasts">here</Link>
        </p>
      </center>
    </div>
  );
}
