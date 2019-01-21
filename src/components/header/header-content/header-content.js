import React from 'react';
import Heading from '../../Copy-Components/Headings/Heading';
import Paragraph from '../../Copy-Components/Paragraphs/paragraphs';

const HeaderContent = (props) => {
  return (
    <div>
      <Heading  colour="wht" level="h1" text="A front&#45;end develop with a passion for visual excellence" marginBottom="36"/>
      <Heading colour="grn" level="h3" text="Present" marginBottom="12"/>
      <Paragraph colour="grn" level="t1" text="Front-End Developer - Tesco" marginBottom="9"/>
      <Paragraph colour="grn" level="t1" text="Freelance Web Developer / Designer" marginBottom="24"/>
      <Heading colour="wht" level="h3" text="Past" marginBottom="12"/>
      <Paragraph colour="wht" level="t1" text="Front-End Developer - Digital Results" marginBottom="9"/>
    </div>
  )
}

export default HeaderContent;