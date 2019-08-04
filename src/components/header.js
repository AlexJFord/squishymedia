import { Link, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header
    className="w-full"
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className="container mx-auto py-4 flex justify-between">
      <h1 className="m-0">
        <Link to="/comments" className="text-white no-underline">
          {siteTitle}
        </Link>
      </h1>
      <span
        className="text-white no-underline cursor-pointer uppercase text-sm"
        onClick={() => {
          delete localStorage.user;
          navigate('/');
        }}
      >
        Sign Out
      </span>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
