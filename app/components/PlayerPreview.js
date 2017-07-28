import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from './ExternalLink';

function PlayerPreview({avatar, userName, url, children}) {
  return (
    <div>
        <div className="column">
          
          <img
            className="user-avatar"
            src={avatar}
            alt={`Avatar for ${userName}`}
          />
          
          {(url)
            ? <h2 className="username"><ExternalLink href={url}>@{userName}</ExternalLink></h2>
            : <h2 className="username">@{userName}</h2>
          }
        
        </div>
        {children}
    </div>
  );
} 

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default PlayerPreview;