import React from 'react';
import { Link } from 'react-router';

export default class CodefriendsCard extends React.Component {
  render() {
    return (
      <div className="project-card" id="codefriends">
        <div className="project-title">
        codeFriends
        </div>
        <div className="img-wrapper">
          <Link to={'codefriends'}>
            <img src="https://s3.amazonaws.com/poly-screenshots.angel.co/Project/3f/410337/ca6721410648eb6ad833d30594eedee3-original.png" />
          </Link>
          </div>
      </div>
    );
  }
}