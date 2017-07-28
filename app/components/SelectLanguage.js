import React from 'react';
import PropTypes from 'prop-types';
import LanguageItem from './LanguageItem';

function SelectLanguage({selectedLanguage, onSelect}) {
    const languages = ['All', 'C', 'C++', 'C#', 'CSS', 'Java', 'JavaScript', 'Objective-C', 'PHP', 'Python', 'Ruby'];  

    return(
      <ul className="languages">
        {languages.map(language =>
          <LanguageItem 
            key={language} 
            language={language} 
            isSelected={language === selectedLanguage}
            onSelect={onSelect} />
        )}
      </ul>
    ); 
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default SelectLanguage;
