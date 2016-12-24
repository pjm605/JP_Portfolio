import React, {PropTypes} from 'react';

const FancyLink = ({url, text}) => {
  return (
    <a href={url} target="_blank" className="link-animated">{text}</a>
  );
};

FancyLink.propTypes = {
  url: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};

export default FancyLink;