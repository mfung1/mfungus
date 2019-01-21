import React from 'react';

const H1 = (props) => {
  return (
    <h1 className={`mf-h1 mb-${props.spacing} col-${props.colour}`}>{props.text}</h1>
  )
}
export default H1;