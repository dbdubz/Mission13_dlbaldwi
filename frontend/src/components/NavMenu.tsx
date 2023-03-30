import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <div>
      <center>
        <Link to="/">Home</Link>
        <Link to="/podcasts">Podcasts</Link>
        <Link to="/movies">Movies</Link>
      </center>
    </div>
  );
}
