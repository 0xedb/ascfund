import React from 'react';
import {Helmet} from 'react-helmet';
import favicon from '../../static/images/asc_logo.jpg';

const Meta = ({children}) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Fund ASC</title>
      <link rel="icon" href={favicon} />
      {children}
    </Helmet>
  );
};

export default Meta;
