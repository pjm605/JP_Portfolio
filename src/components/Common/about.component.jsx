import React, {PropTypes} from 'react';
import Link from './FancyLink';
import s from './About.scss';

const About = () => {
  return (
    <section id="about">
      <header className="section-header">About</header>
      <div className="about__container">
        <div className="about__name">Janice Park</div>
        <div className="about__title">Full Stack Software Engineer</div>
        <p className="about__body">
          I love technical challenges, producing beautiful products, and working in a dynamic group. I built web applications using different technologies and frameworks. I have a passion for learning new technologies and skills and look forward to expanding on my experience. I really enjoyed learning new technologies, creating beautiful applications, and writing cool, smart algorithms.
        </p>
        <div className="about__link">
          <Link url="https://www.linkedin.com/in/janice-park-b03053127" text="LinkedIn" />        
          <Link url="https://github.com/pjm605/poesis" text="Github" />
          <Link url="https://angel.co/janice-park" text="AngelList" />
        </div>
      </div>
    </section>


  );
};

export default About;
