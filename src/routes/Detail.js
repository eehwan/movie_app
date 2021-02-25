import React, {Component} from "react";
import './Detail.css'

class About extends Component {
    componentDidMount() {
        console.log(this.props);
      }
    render() {
      const {
          id,
          year,
          title,
          summary,
          poster,
          genres
        } = this.props.location.state;
      return (
        <div className="Detail">
            <div className="top">
                <img src={poster} alt="poster" title={title} className="detail__poster"></img>
                <div className="detail__data">
                    <div className="firstLine">
                        <div className="detail__title">{title}</div>
                        <div className="detail__year">{year}</div>
                    </div>
                <div className="detail__ID">MovieID : {id}</div>
                <ul className="detail__genres">{genres.map((genre, i)=><li key={i}>{genre}</li>)}</ul>
                </div>
            </div>
            <div className="detail__summary">{summary}</div>
        </div>
      );
    };
} 

export default About;