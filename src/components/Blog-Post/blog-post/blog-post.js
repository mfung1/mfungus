import React, { Component } from 'react';
import Heading from '../../Copy-Components/Headings/Heading';
import Paragraph from '../../Copy-Components/Paragraphs/paragraphs';

class BlogPost extends Component {
  constructor () {
   super(); 
  }

  createExcerpt = (text) => {
    let length = text.length,
        excerpt = text.substring(0, 160);
    return excerpt + "...";
  }

  render () {
    return (
      <a href="#" className="mf-post">
        <div className="mf-post_img" style={{backgroundImage: `url(${this.props.imageURL})`}}></div>
        <div className={`mf-post_cpy mf-post_cpy-${this.props.bgColor}`} data-matchheights={`blogpost-row${this.props.id}`}>
          <Heading level="h3" text={this.props.text} spacing="9" colour={this.props.textColor}/>
          <Paragraph level="t3" text={this.props.date} spacing="9" colour={this.props.textColor}/>
          <Paragraph level="t3" text={this.createExcerpt(this.props.subText)} spacing="0" colour={this.props.textColor}/>
        </div>
      </a>
    )
  }
}

export default BlogPost;