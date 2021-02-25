import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';

function Movie({id, year, title, summary, poster, genres}) {
    return (
        <Link to={{
            pathname: "/detail",
            state: {
                key: id,
                id,
                year,
                title,
                summary,
                poster,
                genres,
            }
        }}>
            <div className="Movie">
                <img src={poster} alt="poster" title={title} className="movie__poster"></img>
                <div className="movie__data">
                    <div className="movie__title">
                        {title}
                    </div>
                    <ul className="movie__genres">{genres.map((genre, i)=><li key={i}>{genre}</li>)}</ul>
                    <div className="movie__summary">
                        {summary.length>250 ? summary.slice(0, 250)+"...": summary}
                    </div>
                </div>
            </div>
        </Link>
    )
};
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
