import React, { Component } from 'react';

class Definition extends Component {
  render() {
    return (
      <div>
          {
            this.props.definitions.length === 0
            ? <p className="errorMs">{this.props.message}</p>
            : <div className="definition">
                <h2 className="definition__title">Definition of {this.props.searchword}</h2>
                <ul className="definition__list"> 
                    { this.props.definitions.map((def, index) => {            
                  return <li key={index} className="definition__item">{def}</li>
                  })}
                </ul>
             </div>
          }
      </div>
    );
  }
}

export default Definition;


