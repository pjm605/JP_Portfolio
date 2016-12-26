import React from 'react';
import s from '../ProjectView.scss'
import Link from '../../Common/FancyLink'

export default class DYSView extends React.Component {

  render() {
    const tools = [
      'Javascript',
      'Node.js',
      'Express',
      'AngularJS',
      'PostgreSQL',
      'Google Places API'
    ];

    return (
      <div className="project-view view-container container">
        <div className="project-view-title">
        Discover Your Stop
        </div>
        <div className="project-view-summary">
          Website that allows travelers to discover new things to do on the stops from origin to destination.
          The website uses third-party api's to get route information and searches for things to do for each stop.
        </div>
        <div className="project-view-tech-label">Tech</div>
        <div className="project-view-tech">
          {tools.map((tool) => {
            return <div className="project-view-tools" key={tool}>{tool}</div>;
          })}
        </div>
        <div className="project-view-link">
          <Link url="https://github.com/pjm605/Discover-Your-Stops" text="Github" />
          <Link url="http://dys.herokuapp.com" text="Website" />
        </div>
          <img src="https://s3.amazonaws.com/poly-screenshots.angel.co/Project/12/410333/3df991adda1d0f4ad1a8a3c6ffad048f-original.png" style={{
            height: '100%',
            width: '100%',
            paddingTop: '2em'
          }} />
      </div>
    );
  }
}