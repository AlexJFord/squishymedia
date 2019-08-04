import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Login from '../components/login';
import '../components/layout.css';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="flex items-center justify-center h-screen">
      <Login />
    </div>
  </>
);

export default IndexPage;
