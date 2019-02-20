import React, { Fragment } from 'react';
import Heading from '../Copy-Components/Headings/Heading';
import Paragraph from '../Copy-Components/Paragraphs/paragraphs';

class Skills extends React.Component {
  constructor () {
    super();
    this.state = {
      classList: "mf-wrp mw-30"
    }
  }

  componentDidMount () {
    this.setState({classList: "mf-wrp mw-30 fade-up"});
  }
  render () {
    return (
      <section className="mf-skills bg-yllw mb-56">
        <div className={this.state.classList}>
          <Heading colour="blk" level="h2" text="What I can do" spacing="24"/>
          <Paragraph level="t1" text="I like to think that I have a great skillset, but here's some of the things I know." spacing="9" colour="blk"/>
        </div>
      </section>
    )
  }
}

export default Skills;