import React from 'react';
import PropTypes from 'prop-types';
import Number from './Number';
import ExternalLink from './ExternalLink';

function RepoGrid({repos}) {
    return(
      repos &&
      <ul className="popular-list">
        {
          repos.map((repo, index) =>
          (
              <li key={repo.name} className="popular-item">
                <div className="popular-rank">#{index + 1}</div>
                <ul className="space-list-items">
                    <li>
                      <img
                        className="repo-avatar"
                        src={repo.owner.avatar_url}
                        alt={`Avatar for ${repo.owner.login}`} />
                    </li>
                    <li>
                      <ExternalLink href={repo.html_url} className="repo-name">{repo.name}</ExternalLink>
                    </li>
                    <li>
                      <ExternalLink href={repo.owner.html_url}>@{repo.owner.login}</ExternalLink>
                    </li>
                    <li>
                      <Number value={repo.stargazers_count}/> stars
                    </li>
                    <li className="popular-description">
                      {repo.description}
                    </li>
                </ul>
              </li>
          ))
        }
      </ul>
    ); 
}

RepoGrid.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default RepoGrid;