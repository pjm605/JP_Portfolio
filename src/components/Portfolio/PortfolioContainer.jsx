import React, {PropTypes} from 'react';
import moment from 'moment';
import portfolioData from '../../data/portfolioData';
import Portfolio from './Portfolio';
import TagList from './TagList';
import s from './Portfolio.scss'
import Intro from "./Intro"

class PortfolioContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: portfolioData.sort((p1, p2) => p1.date < p2.date).map(p => Object.assign({}, p, {date: moment(p.date).fromNow()}))
    };

  }

  render() {
    const items = this.state.items.map(item => {
      return Object.assign({}, item);
    });

    return (

 
      <section id="portfolio">
        <Intro />
        <header className="section-header">Projects</header>
        <Portfolio items={items} />
      </section>

    );
  }
}

export default PortfolioContainer;