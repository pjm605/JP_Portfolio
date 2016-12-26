import React from 'react';
import s from '../ProjectView.scss'
import Link from '../../Common/FancyLink'

export default class CodefriendsView extends React.Component {

  render() {
    const tools = [
      'Javascript',
      'Node.js',
      'Express',
      'AngularJS',
      'PostgreSQL'
    ];

    return (
      <div className="project-view view-container container">
        <div className="project-view-title">
        codeFriends
        </div>
        <div className="project-view-summary">
        	A faux ecommerce website that allows users to purchase 'imaginary' friends.
          Users can view, select, and add friends for purchase. It features login, guest checkout, and review. 
        </div>
        <div className="project-view-tech-label">Tech</div>
        <div className="project-view-tech">
          {tools.map((tool) => {
            return <div className="project-view-tools" key={tool}>{tool}</div>;
          })}
        </div>
        <div className="project-view-link">
          <Link url="https://github.com/kenzable/codeFriends" text="Github" />
          <Link url="https://evening-bayou-19167.herokuapp.com" text="Website" />
        </div>
          <img src="https://s3.amazonaws.com/poly-screenshots.angel.co/Project/3f/410337/c946198e2e256f507aa543f70d8c44f1-original.png" style={{
            height: '100%',
            width: '100%',
            paddingTop: '2em'
          }} />
      </div>
    );
  }
}