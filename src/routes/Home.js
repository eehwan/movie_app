import './Home.css';
import React, { Component } from 'react';
import Movie from '../components/Movie';
import axios from 'axios';

const fetchUri = "https://yts-proxy.now.sh/list_movies.json";

class Home extends Component {
  state = {
    isLoaded: false,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(fetchUri);
    console.log(movies);
    this.setState({ movies, isLoaded: true });
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { movies, isLoaded } = this.state
    return  (
      <div className="Home">
        {isLoaded
        ? <div className="Movies">
            {movies.map(movie => 
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            )}
          </div>
        : <div className="loader">
            <p>
              loading...
            </p>
          </div>}
      </div>
    );
  }
}

export default Home;
