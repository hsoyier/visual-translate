import React from 'react';
import PropTypes from 'prop-types';

const Topics = (props) => {
  return (
    <ul className="topics">
      {props.topicFirstImage.map(image => 
        <li className="topics__item" key={image.id}>
          <p className="topics__title">{image.keyword}</p>
          <img onClick={props.handleTopic}  className="topics__image" src={image.image} alt="" name={image.keyword} />
        </li>
      )}
    </ul>
  )
}

Topics.propTypes = {
  handleTopic: PropTypes.func,
  topicFirstImage: PropTypes.array
}

export default Topics;


