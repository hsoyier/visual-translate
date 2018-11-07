import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="title">GIPHYfy</h1> 
      </div>
    </header>
  )
}

Header.propTypes = {
  handleTopic: PropTypes.func,
  topicFirstImage: PropTypes.array
}

export default Header;


