import PropTypes from 'prop-types';

function Movie({id, year, title, summary, poster, genres}) {
    return (
        <div className="Movie">
            <img src={poster} alt="poster" title={title} className="movie__poster"></img>
            <div className="movie__data">
                <div className="movie__title">
                    {title}
                </div>
                <ul className="movie__genres">{genres.map((genre, i)=><li key={i}>{genre}</li>)}</ul>
                <div className="movie__summary">
                    {summary.slice(0, 250)}...
                </div>
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
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
