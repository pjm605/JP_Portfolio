import React from 'react';
import Poesis from './Poesis/PoesisCard';
import DYS from './DYS/DYSCard';
import Codefriends from './Codefriends/CodefriendsCard';
import s from './Project.scss'


export default class Projects extends React.Component  {
  render() {
    return (
      <div className="projects-container">
        <div id="recent-projects">PROJECTS</div>
        <Poesis />
        <DYS />
        <Codefriends />
      </div>
    );
  }
}
