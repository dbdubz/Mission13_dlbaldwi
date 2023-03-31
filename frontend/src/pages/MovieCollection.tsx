import React from 'react';
import movies_json from '../movies.json';

const movies = movies_json.MovieData;

class Movie extends React.Component<{
  Title: string;
  Category: string;
  Year: number | string;
  Director: string;
  Rating: string;
  Edited?: string;
}> {
  render() {
    const movie = this.props;
    return (
      <>
        <tr className="bg-light">
          <td>{movie.Category}</td>
          <td>{movie.Year}</td>
          <td>{movie.Title}</td>
          <td>{movie.Director}</td>
          <td>{movie.Rating}</td>
          <td>{movie.Edited}</td>
        </tr>
      </>
    );
  }
}

class MovieTable extends React.Component {
  render() {
    return (
      <>
        <div className="col-8">
          <table className="table table-bordered text-center">
            <thead className="bg-secondary text-light">
              <tr>
                <th>Category</th>
                <th>Year</th>
                <th>Title</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <Movie {...movie} />
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

function Podcasts() {
  return (
    <div>
      <center>
        <br></br>
        <h1>Movie Collection</h1>
        <br></br>
        <MovieTable />
      </center>
    </div>
  );
}

export default Podcasts;
