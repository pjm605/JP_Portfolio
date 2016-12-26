import React from 'react';
import s from '../ProjectView.scss'
import Link from '../../Common/FancyLink'

export default class PoesisView extends React.Component {

  render() {
    const tools = [
      'Javascript',
      'Node.js',
      'Express',
      'AngularJS',
      'CodeMirror API'
    ];

    return (
      <div className="project-view">
        <div className="project-view-title">
          Poesis
        </div>
        <div className="project-view-summary">
          Website based poetry editor providing highlighting based on analysis.  
          The website uses a custom developed algorithm to discover assonance, alliteration, rhyme, and meter in the text. Then depending on the user's selection, the patterns are visually expressed in the editor.
        </div>
        <div className="project-view-tech-label">Tech</div>
        <div className="project-view-tech">
          {tools.map((tool) => {
            return <div className="project-view-tools" key={tool}>{tool}</div>;
          })}
        </div>
        <div className="project-view-link">
          <Link url="https://github.com/pjm605/poesis" text="Github" />
          <Link url="http://thepoesis.herokuapp.com" text="Website" />
        </div>
          <img src="https://s3.amazonaws.com/poly-screenshots.angel.co/Project/b3/410332/c29fdf64bf3fce138b2b6de1df1e8a7c-original.png" style={{
            height: '100%',
            width: '100%',
            paddingTop: '2em'
          }} />        
      </div>
    );
  }
}

