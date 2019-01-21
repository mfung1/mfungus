import React from 'react';

const H4 = (props) => {
  return (
    <h4 className={`mf-h4 mb-${props.spacing} col-${props.colour}`}>{props.text}</h4>
  )
}
export default H4;