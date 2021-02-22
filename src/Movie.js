function Movie({title, poster, summary}) {
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

export default Movie;
