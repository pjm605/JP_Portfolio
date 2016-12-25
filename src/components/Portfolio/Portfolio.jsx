
import React, {PropTypes} from 'react';
import PortfolioItem from './PortfolioItem';
import s from './Portfolio.scss'

const Portfolio = ({items}) => {
  return (
    <ul className="col-md-4 portfolio__list">
      {items.map((item, index) => <PortfolioItem key={index} {...item}/>)}
    </ul>
 );
};

Portfolio.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default Portfolio;