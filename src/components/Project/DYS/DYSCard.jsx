import React from 'react';
import { Link } from 'react-router';

export default class DYSCard extends React.Component {
  render() {
    return (
      <div className="project-card" id="dys">
        <div className="project-title">
        Discover Your Stops
        </div>
        <div className="img-wrapper">
          <Link to={'dys'}>
            <img src="https://s3.amazonaws.com/poly-screenshots.angel.co/Project/12/410333/178d604495641b774856e3e1928d4703-original.png" />
          </Link>
        </div>
      </div>
    );
  }
}