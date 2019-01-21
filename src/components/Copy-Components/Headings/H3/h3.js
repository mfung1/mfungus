import React from 'react';

const H3 = (props) => {
  return (
    <h3 className={`mf-h3 mb-${props.spacing} col-${props.colour}`}>{props.text}</h3>
  )
}
export default H3;