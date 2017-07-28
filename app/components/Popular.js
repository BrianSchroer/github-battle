import React from 'react';
import SelectLanguage from './SelectLanguage';
import RepoGrid from './RepoGrid';
import Loading from './Loading';
import api from '../utils/api';

export default class Popular extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repos: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(language) {
    this.setState({
      selectedLanguage: language,
      repos: null
    });

    api.fetchPopularRepos(language)
      .then(repos => this.setState({repos: repos}));
  }

  render() { 
    const {repos} = this.state;

    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {
          (repos) 
            ? <RepoGrid repos={repos} /> 
            : <Loading/>
        }      
      </div>
    );
  }
}