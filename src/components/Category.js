import React, { Component } from 'react';

class Category extends Component {

  render() {
    return (
      <div>
        {this.props.test()}
      </div>
    );
  }
}

export default Category;