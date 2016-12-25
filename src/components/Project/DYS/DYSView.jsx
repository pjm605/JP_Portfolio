import React from 'react';


export default class DYSView extends React.Component {

  render() {
    const tools = [
      'Javascript',
      'Angular',
      'PostgreSQL'
    ];

    return (
      <div className="project-view view-container container">
        <div className="project-view-title">
        Discover Your Stop
        </div>
        <div className="project-view-summary">
          Currently under development - Summary.............
        </div>
        <div className="project-view-tech-label">Tech</div>
        <div className="project-view-tech">
          {tools.map((tool) => {
            return <div className="project-view-tools" key={tool}>{tool}</div>;
          })}
        </div>
          <img src="https://s3.amazonaws.com/poly-screenshots.angel.co/Project/12/410333/178d604495641b774856e3e1928d4703-original.png" style={{
            height: '100%',
            width: '100%',
            paddingTop: '2em'
          }} />
      </div>
    );
  }
}