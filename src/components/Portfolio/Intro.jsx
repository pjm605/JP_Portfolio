import React, {PropTypes} from 'react';
import s from './Portfolio.scss'

const Intro = () => {
	return (
		<div id="intro" className="intro">
	      <header className="section-header">Janice Park</header>
	      <div className="intro__tag">Full Stack Software Engineer</div>
	      <div className="intro__social-buttons">
	        <a href="https://www.linkedin.com/in/janice-park-b03053127" target="_blank" >LinkedIn</a>
	        <a href="https://github.com/pjm605" target="_blank" >Github</a>
	        <a href="https://angel.co/janice-park" target="_blank" >AngelList</a>
	      </div>
	    </div>
	);
};

export default Intro;