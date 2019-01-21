import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header/header';
import Footer from '../components/footer/index';

import '../../sass/style.scss';

const TemplateWrapper = ({ children }) => (
  <main className="mf-wrpr">
    <Helmet
      title="mfung | Front-End Web Developer"
    >
      <link href="https://fonts.googleapis.com/css?family=Karla:400,400i,700|Rubik:500,700" rel="stylesheet"/>
    </Helmet>
    <Header />
    {children()}
  </main>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
