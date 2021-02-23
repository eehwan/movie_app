import PropTypes from 'prop-types';

function Movie({id, year, title, summary, poster}) {
    return (
        <div className="Movie">
            <img src={poster} alt="poster of {title}" className="poster"></img>
            <div className="movieTitle">
                {title}
            </div>
            <div className="movieSummary">
                {summary}
            </div>
        </div>
    )
};
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;
