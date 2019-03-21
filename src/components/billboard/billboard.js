import React from "react";
import Heading from '../Copy-Components/Headings/Heading';
import Paragraph from '../Copy-Components/Paragraphs/paragraphs';

const NormalBillboard = (props) => (
  <section className={`mf-billboard mf-wrp fade-up mb-${props.spacing}`}>
    <div>
      <div className={`mf-billboard_cpy bg-${props.bgColor}`}>
        <Heading colour={props.color} level="h3" text={props.headingText} spacing="24"/>
        <Paragraph level="t2" text={props.paragraphText} spacing="12" colour={props.color}/>
        <Paragraph level="t2" text={props.paragraphText2} spacing="9" colour={props.color}/>
      </div>
    </div>
    <div className="mf-billboard_cnt" >
      <div className="mf-billboard_img mf-wrp" style={{backgroundImage: `url(${props.image})`}}></div>
    </div>
  </section>
);
const ReverseBillboard = (props) => (
  <section className={`mf-billboard mf-billboard-rvrs fade-up mf-wrp mb-${props.spacing}`}>
    <div className="mf-billboard_cnt" >
      <div className="mf-billboard_img mf-wrp" style={{backgroundImage: `url(${props.image})`}}></div>
    </div>
    <div>
      <div className={`mf-billboard_cpy bg-${props.bgColor}`}>
        <Heading colour={props.color} level="h3" text={props.headingText} spacing="24"/>
        <Paragraph level="t2" text={props.paragraphText} spacing="12" colour={props.color}/>
        <Paragraph level="t2" text={props.paragraphText2} spacing="9" colour={props.color}/>
      </div>
    </div>
  </section>
);
class Billboard extends React.Component {
  constructor () {
    super();
    let theBillboard = '';
  }
  
  render () {
    if (this.props.reverse == true) {
      return (<ReverseBillboard color={this.props.color} bgColor={this.props.bgColor} spacing={this.props.spacing} headingText={this.props.headingText} paragraphText={this.props.paragraphText} paragraphText2={this.props.paragraphText2} image={this.props.image}/>)
    }
    return (<NormalBillboard color={this.props.color} bgColor={this.props.bgColor}  spacing={this.props.spacing} headingText={this.props.headingText} paragraphText={this.props.paragraphText} paragraphText2={this.props.paragraphText2} image={this.props.image}/>)
  }
}

export default Billboard;