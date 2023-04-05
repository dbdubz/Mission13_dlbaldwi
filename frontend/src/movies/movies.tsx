import { useEffect, useState } from 'react';
import { Movie } from '../types/movies';

function MoviesList() {
  const [movieData, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const rsp = await fetch('https://localhost:4000/api/movies');
      const temp = await rsp.json();
      setMovies(temp);
    };

    fetchMovies();
  }, []);
  return (
    <>
      <div className="container align-items-center">
        <h1 className="text-center">Movie Collection</h1>
        <br></br>
        <table className="col-8 table table-bordered text-center">
          <thead className="bg-secondary text-light">
            <tr>
              <th>MovieId</th>
              <th>Category</th>
              <th>Year</th>
              <th>Title</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((movie) => (
              <tr className="bg-light" key={movie.movieId}>
                <td>{movie.movieId}</td>
                <td>{movie.category}</td>
                <td>{movie.year}</td>
                <td>{movie.title}</td>
                <td>{movie.director}</td>
                <td>{movie.rating}</td>
                <td>{movie.edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default MoviesList;
