import './reset.css';
import './App.css';
import React from 'react';
import Header from './Header';
import Movie from './Movie';
import axios from 'axios';

const fetchUri = "https://yts-proxy.now.sh/list_movies.json";

class App extends React.Component {
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
    return <div className="App">
            <Header />
              <div className="Movies">
                {isLoaded
                ? movies.map(movie => 
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                  />
                  )
                : "loading..." }
              </div>
          </div>
  }
}

export default App;
