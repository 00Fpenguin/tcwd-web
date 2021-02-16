import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Typography } from '@material-ui/core';

const Page = forwardRef(({
  children,
  title = '',
  ...rest
}, ref) => {
  return (
    <div
      ref={ref}
      {...rest}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});

const Header = ({ title }) => (
  <>
    <Typography variant="h1" gutterBottom>{title}</Typography>
    <Typography variant="subtitle1" gutterBottom>{(moment().format('[Today, ] LL'))}</Typography>
  </>
);

Header.propTypes = {
  title: PropTypes.string,
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

Page.Header = Header;

export default Page;
