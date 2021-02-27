import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className="Navigation">
            <div className="inner">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <a
                href="https://github.com/eehwan/movie_app"
                target="_blank"
                rel="noopener noreferrer"
                >
                    Github Link
                </a>
            </div>
        </div>
    )
};

export default Navigation;
