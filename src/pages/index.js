/* global graphql */

import React from 'react';
import Skills from '../components/skills/skills';
import Blog from '../components/Blog-Post/blog-posts';
import HowTo from '../components/how-to';

const IndexPage = props =>
  (<main>
    <Skills/>
    <Blog/>
  </main>);

export default IndexPage;

