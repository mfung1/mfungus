import {matchHeights, initial} from '../../components/matchHeights';
import React, {Component} from 'react';
import Heading from '../Copy-Components/Headings/Heading';

import BlogPost from './blog-post/blog-post';

class BlogPosts extends Component {
  constructor () {
    super();
    this.state = {
      classList: "mf-wrp mb-36",
      content: [
        {
          id: 1,
          headingText: 'Teamwork is good work',
          imageURL: 'https://images.unsplash.com/photo-1526375713597-746d61b27b34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1287&q=80',
          post_date: '03/01/2019',
          subtext: 'It’s important to get the setting right. To get stuff done, first get the team working together. Product is a set of cogs, and if one isn’t turning then none of them are.'
        },
        {
          id: 2,
          headingText: 'Think like a designer',
          imageURL: 'https://images.unsplash.com/photo-1525422847952-7f91db09a364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1365&q=80',
          post_date: '02/01/2019',
          subtext: 'To get approval and recognition for your work as a developer; it’s important to understand the designer’s perspective.'
        },
        {
          id: 3,
          headingText: 'Teamwork is good work',
          imageURL: 'https://images.unsplash.com/photo-1526375713597-746d61b27b34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1287&q=80',
          post_date: '01/01/2019',
          subtext: 'It’s important to get the setting right. To get stuff done, first get the team working together. Product is a set of cogs, and if one isn’t turning then none of them are.'
        },
      ]
    }
  }

  componentDidMount() {
    initial({dataAttr: "data-matchheights", gridItemClass: "mf-post"});
    matchHeights();
    this.setState({classList: "mf-wrp mb-36 fade-up"});
  }


  render () {
    return (
      <section className={this.state.classList}>
        <Heading level="h2" text="Blog" spacing="24" colour="blk"/>
        <div className="mf-posts">
          {this.state.content.map( (post) => {
            let theColor = '',
                theTextColor = '',
                theRow = '';
            if (post.id % 3 == 0 ) {
              theColor = 'blk';
              theTextColor = 'wht';
            } else if (post.id % 2 == 0) {
              theColor = 'grn'
            } else {
              theColor = 'pnk';
              theTextColor = 'wht'
            }
            post.id % 4 == 0 ? theRow = '1' : theRow = '2';
            return (
              <BlogPost
                id={theRow}
                key={[post.id]}
                bgColor={theColor}
                textColor={theTextColor}
                text={post.headingText}
                subText={post.subtext}
                imageURL={post.imageURL}
                date={post.post_date}
              />
            )
          })}
        </div>
      </section>
    )
  }
}

export default BlogPosts;