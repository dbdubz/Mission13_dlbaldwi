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
      <tr>
        <td>{movie.Category}</td>
        <td>{movie.Year}</td>
        <td>{movie.Title}</td>
        <td>{movie.Director}</td>
        <td>{movie.Rating}</td>
        <td>{movie.Edited}</td>
      </tr>
    );
  }
}

class MovieTable extends React.Component {
  render() {
    return (
      <table>
        <thead>
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
    );
  }
}

export default function Podcasts() {
  return (
    <div>
      <center>
        <h1>My Movie Collection</h1>
        <MovieTable />
      </center>
    </div>
  );
}
