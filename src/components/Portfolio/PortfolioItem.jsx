import React, {PropTypes} from 'react';
import TagList from './TagList';
import Link from '../../FancyLink';
import s from './Portfolio.scss';

const PortfolioItem = ({name, date, desc, tags, links, imgUrl, imgAlt, visited}) => {
  const nameClass = visited ? "metadata__name visited" : "metadata__name";

  return (
    <li className="portfolio-item" >
     <a href={links.demo} target="_blank">
      <img src={imgUrl} alt={imgAlt} className="portfolio-item__img" />
     </a>

     <section className="portfolio-item__metadata">
      <p className={nameClass}>{name}</p>
      <p className="metadata__date">{date}</p>
      <p className="metadata__desc">{desc}</p>
      <div className="metadata__link">
        <i className="fa fa-codepen" aria-hidden="true"/> <Link url={links.code} text="Code"/>
      </div>
      <TagList tags={tags} wrapperClass="metadata__tags"/>
     </section>
   </li>
 );
};

PortfolioItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  desc: React.PropTypes.string.isRequired,
  tags: React.PropTypes.array.isRequired,
  links: React.PropTypes.object.isRequired,
  imgUrl: React.PropTypes.string.isRequired,
  imgAlt: React.PropTypes.string.isRequired,
  visited: React.PropTypes.bool.isRequired
};

export default PortfolioItem;