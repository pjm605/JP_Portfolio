import React from 'react';
import s from '../ProjectView.scss'

export default class PoesisView extends React.Component {

  render() {
    const tools = [
      'Javascript',
      'Node',
      'Express'
    ];

    return (
      <div className="project-view">
        <div className="project-view-title">
          Poesis
        </div>
        <div className="project-view-summary">
        A responsive.......summary
        </div>
        <div className="project-view-tech-label">Tech</div>
        <div className="project-view-tech">
          {tools.map((tool) => {
            return <div className="project-view-tools" key={tool}>{tool}</div>;
          })}
        </div>
      </div>
    );
  }
}