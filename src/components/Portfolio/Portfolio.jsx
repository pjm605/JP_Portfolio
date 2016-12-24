
import React, {PropTypes} from 'react';
import PortfolioItem from './PortfolioItem';
import s from './Portfolio.scss'

const Portfolio = ({items, onClick}) => {
  return (
    <ul className=".col-md-4 portfolio__list" onClick={onClick}>
      {items.map((item, index) => <PortfolioItem key={index} {...item}/>)}
    </ul>
 );
};

Portfolio.propTypes = {
  items: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Portfolio;