import React from 'react';

const T1 = (props) => {
  return (
    <p className={`mf-t1 mb-${props.spacing} col-${props.colour}`}>{props.text}</p>
  )
}
export default T1;