import React from 'react';


export default class CodefriendsView extends React.Component {

  render() {
    const tools = [
      'Javascript',
      'Angular',
      'PostgreSQL'
    ];

    return (
      <div className="project-view view-container container">
        <div className="project-view-title">
        codeFriends
        </div>
        <div className="project-view-summary">
        	This is Summary. This is Summary. This is Summary.This is Summary.This is Summary. This is Summary.This is Summary. This is Summary. 
        </div>
        <div className="project-view-tech-label">Tech</div>
        <div className="project-view-tech">
          {tools.map((tool) => {
            return <div className="project-view-tools" key={tool}>{tool}</div>;
          })}
        </div>
          <img src="https://s3.amazonaws.com/poly-screenshots.angel.co/Project/3f/410337/ca6721410648eb6ad833d30594eedee3-original.png" style={{
            height: '100%',
            width: '100%',
            paddingTop: '2em'
          }} />
      </div>
    );
  }
}