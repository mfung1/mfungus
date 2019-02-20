import React from 'react';
import T1 from './T1/T1';
import T2 from './T2/T2';
import T3 from './T3/T3';

const Paragraph = (props) => {
  const Paras = {
    't1': T1,
    't2': T2,
    't3': T3,
  }
  const TheParagraph = Paras[props.level || 't1'];
  
  return (
    <TheParagraph colour={props.colour} level={props.level} text={props.text} spacing={props.spacing}/> 
  )
}

export default Paragraph;