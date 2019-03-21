import React, { Fragment } from 'react';
import Heading from '../Copy-Components/Headings/Heading';
import Paragraph from '../Copy-Components/Paragraphs/paragraphs';

import Billboard from '../billboard/billboard';

import Image from '../../../assets/front-end.svg';
import Image2 from '../../../assets/email.svg';


class Skills extends React.Component {
  constructor () {
    super();
    this.state = {
      classList: "mw-30"
    }
  }

  componentDidMount () {
    this.setState({classList: "mw-30 fade-up"});
  }
  render () {
    return (
      <article className="mf-skills bg-gry mb-56">
        <div className="mf-wrp">
          <section className={this.state.classList}>
            <Heading colour="blk" level="h2" text="What I can do" spacing="24"/>
            <Paragraph level="t1" text="I like to think that I have a great skillset, but here's some of the things I know." spacing="104" colour="blk"/>
          </section>
          <Billboard reverse={false} bgColor="yllw" spacing="104" headingText="Front-End" paragraphText="I use the powers of HTML, CSS and JavaScript to build user interfaces for the Web and Mobile Apps." paragraphText2 ="I am able to combine this knowledge with a framework such as React or Vue to build scalable and maintainble codebases." image={Image} />
          <Billboard reverse={true} bgColor="red" spacing="104" color="wht" headingText="Email" paragraphText="I am well versed in the world of HTML Email; and produce consistent and reliable templates." paragraphText2 ="This is done using a collborative process between design and developers to ensure the visual quality and reputation of the brand is kept to a high standard." image={Image2} />
          <Billboard reverse={false} bgColor="grn" spacing="104" headingText="Front-End" paragraphText="I use the powers of HTML, CSS and JavaScript to build user interfaces for the Web and Mobile Apps." paragraphText2 ="I am able to combine this knowledge with a framework such as React or Vue to build scalable and maintainble codebases." image={Image} />
        </div>
      </article>
    )
  }
}

export default Skills;