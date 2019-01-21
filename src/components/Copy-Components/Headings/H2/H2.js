import React from 'react';

const H2 = (props) => {
  return (
    <h2 className={`mf-h2 mb-${props.spacing} col-${props.colour}`}>{props.text}</h2>
  )
}
export default H2;