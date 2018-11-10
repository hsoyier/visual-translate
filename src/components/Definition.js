import React from 'react';
import PropTypes from 'prop-types';

const Definition = (props) => {
    return (
      <React.Fragment>
          {
            props.definitions.length === 0
            ? <p className="errorMs">{props.message}</p>
            : <div className="definition">
                <h2 className="definition__title">Definition of {props.searchword}</h2>
                <ul className="definition__list"> 
                    { props.definitions.map((def, index) => {            
                  return <li key={index} className="definition__item">{def}</li>
                  })}
                </ul>
             </div>
          }
      </React.Fragment>
    );       
}

Definition.propTypes = {
  message: PropTypes.string,
  definitions: PropTypes.array,
}
  
  export default Definition;


