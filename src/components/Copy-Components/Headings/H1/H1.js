import React from 'react';

export const H1 = (props) => {
  return (
    <h1 className={`mf-h1 mb-${props.spacing} col-${props.colour}`}>{props.text}</h1>
  )
}

export const O1 = (props) => {
  return (
    <h1 className={`mf-O1 mb-${props.spacing} col-${props.colour}`}>{props.text}</h1>
  )
}