import React from 'react';
import PropTypes from 'prop-types';

function LanguageItem({language, onSelect, isSelected}) {
  return(
    <li
      onClick={onSelect.bind(null, language)}
      style={(isSelected) ? {color: '#d0021b'} : null}
    >
      {language}
    </li>
  );
}

LanguageItem.propTypes = {
  language: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default LanguageItem;
