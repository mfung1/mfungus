import React, { Fragment } from 'react';
import Heading from '../../Copy-Components/Headings/Heading';
import Paragraph from '../../Copy-Components/Paragraphs/paragraphs';

// import Hero from '../../../../assets/hero2.svg';

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
        <section className="mf-header_hero">
          <div className="mf-header_strp">
            <Heading  colour="wht" level="O1" text="A front&#45;end developer with a passion for visual excellence." spacing="24"/>
            <Paragraph colour="wht" level="t1" text="I work hard to deliver the best for my clients and users; by employing visual design to the web." spacing="9"/>
          </div>
          {/* <div className="mf-header_img" style={{backgroundImage: `url(${Hero})`}}></div> */}
          {/* <div className="mf-header_exp">
            <Heading colour="grn" level="h3" text="Present" spacing="12"/>
            <Paragraph colour="grn" level="t1" text="Front-End Developer - Tesco" spacing="9"/>
            <Paragraph colour="grn" level="t1" text="Freelance Web Developer / Designer" spacing="24"/>
            <Heading colour="wht" level="h3" text="Past" spacing="12"/>
            <Paragraph colour="wht" level="t1" text="Front-End Developer - Digital Results" spacing="9"/>
          </div> */}
        </section>
      </article>
    )
  }
}

export default HeaderContent;