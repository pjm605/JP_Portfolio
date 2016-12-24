import React, {PropTypes} from 'react';
import moment from 'moment';
import portfolioData from '../../data/portfolioData';
import LOCAL_STORAGE_NAME from '../../data/localStorageName';
import Portfolio from './Portfolio';
import TagList from './TagList';
import s from './Portfolio.scss'

class PortfolioContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: portfolioData.sort((p1, p2) => p1.date < p2.date).map(p => Object.assign({}, p, {date: moment(p.date).fromNow()})),
      visited:  JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME)) || []
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const url = e.target.parentElement.href;

    if (this.state.visited.indexOf(url) === -1) {
      this.setState({
        visited: this.state.visited.concat(url)
      }, () => {
        localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(this.state.visited));
      });
    }
  }

  render() {
    const items = this.state.items.map(item => {
      return Object.assign({}, item, {visited: this.state.visited.indexOf(item.links.code) >= 0});
    });

    return (
      <section id="portfolio">
        <header className="section-header">Portfolio</header>
        <Portfolio items={items} onClick={this.onClick}/>

      </section>
    );
  }
}

export default PortfolioContainer;