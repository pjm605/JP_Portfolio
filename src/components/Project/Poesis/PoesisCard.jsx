import React from 'react';
import { Link } from 'react-router';


export default class PoesisCard extends React.Component {
  render() {
    return (
      <div className="project-card" id="poesis">
        <div className="project-title">
          Poesis  
        </div>
        <div className="project-summary">
        Allows users to visually analyze poetry 
        </div>
        <div className="img-wrapper">
          <Link to={'Poesis'}>
            <img src="https://s3.amazonaws.com/poly-screenshots.angel.co/Project/b3/410332/1f7ae0567cfbcea306a8200b72fe3e38-original.png" />
          </Link>
        </div>
      </div>
    );
  }
}