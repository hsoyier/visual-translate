import React from 'react';

const Definition = (props) => {
  return (
    <div className="definition">
      <ul className="definition__list">
        { props.definitions.map((def, i) => <li key={i} className="definition__item">{def}</li>) }
      </ul>
    </div>
  )
}

export default Definition;


