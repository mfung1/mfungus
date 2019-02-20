import React from 'react';
import H1 from './H1/H1';
import H2 from './H2/H2';
import H3 from './H3/H3';
import H4 from './H4/H4';

const Heading = (props) => {
  const Headings = {
    'h1': H1,
    'h2': H2,
    'h3': H3,
    'h4': H4
  }
  const TheHeading = Headings[props.level || 'h1'];
  
  return (
    <TheHeading colour={props.colour} level={props.level} text={props.text} spacing={props.spacing}/> 
  )
}

export default Heading;