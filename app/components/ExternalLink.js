import React from 'react';
import PropTypes from 'prop-types';

function ExternalLink({href, className, children}) {
  return (
    <a href={href} className={className} target="_blank">
      {children || href}
    </a>
  );
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default ExternalLink;