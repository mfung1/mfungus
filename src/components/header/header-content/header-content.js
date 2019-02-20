import React from 'react';
import Heading from '../../Copy-Components/Headings/Heading';
import Paragraph from '../../Copy-Components/Paragraphs/paragraphs';

class HeaderContent extends React.Component {
  constructor() {
    super();
    this.state = {
      classList: "mf-header_content mf-wrp"
    }
  }

  componentDidMount () {
    this.setState({classList: "mf-header_content mf-wrp fade-up"})
  }


  render () {
    return (
      <article className={this.state.classList}>
        <section>
          <div className="mf-header_strp">
            <Heading  colour="wht" level="h1" text="A front&#45;end developer with a passion for visual excellence." spacing="36"/>
          </div>
          <div className="mf-header_exp">
            <Heading colour="grn" level="h3" text="Present" spacing="12"/>
            <Paragraph colour="grn" level="t1" text="Front-End Developer - Tesco" spacing="9"/>
            <Paragraph colour="grn" level="t1" text="Freelance Web Developer / Designer" spacing="24"/>
            <Heading colour="wht" level="h3" text="Past" spacing="12"/>
            <Paragraph colour="wht" level="t1" text="Front-End Developer - Digital Results" spacing="9"/>
          </div>
        </section>
      </article>
    )
  }
}

export default HeaderContent;