import React, {PropTypes} from 'react';
import s from './tag.scss';

const TagList = ({tags, wrapperClass, badges}) => {
  return (
    <ul className={wrapperClass}>
      {tags.map((tag, index) => <li className="tag portfolio__item-tag" key={index}>{tag} {badges && <span className="tag-badge">{badges[index]}</span>}</li>)}
    </ul>
 );
};

TagList.propTypes = {
  tags: React.PropTypes.array.isRequired,
  wrapperClass: React.PropTypes.string.isRequired,
  badges: React.PropTypes.string
};

export default TagList;