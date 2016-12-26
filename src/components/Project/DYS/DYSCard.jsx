import React from 'react';
import { Link } from 'react-router';

export default class DYSCard extends React.Component {
  render() {
    return (
      <div className="project-card" id="dys">
        <div className="project-title">
        Discover Your Stops
        </div>
        <div className="project-summary">
        Allows users to discover things about stops along a route
        </div>
        <div className="img-wrapper">
          <Link to={'dys'}>
            <img src="https://s3.amazonaws.com/poly-screenshots.angel.co/Project/12/410333/39095d5c90c5ab35a976d1ab6552e48b-original.png" />
          </Link>
        </div>
      </div>
    );
  }
}