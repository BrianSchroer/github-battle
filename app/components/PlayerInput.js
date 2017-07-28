import React from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {userName: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const userName = event.target.value;
    this.setState(() => ({userName}));
  }

  handleSubmit(event) {
    const {onSubmit, id} = this.props;
    const {userName} = this.state;

    event.preventDefault();
    
    onSubmit(id, userName);
  }

  render() {
    const {label} = this.props;
    const {userName} = this.state;

    return (
      <form 
        className="column"
        onSubmit={this.handleSubmit}
      >
        
        <label 
          className="header" 
          htmlFor="userName"
        >
          {label}
        </label>
        
        <input 
          type="text"
          id="userName" 
          placeholder="github user name"
          autoComplete="off"
          value={userName}
          onChange={this.handleChange}
        />

        <button
          className="button"
          type="submit"
          disabled={!userName}
        >
          Submit
        </button>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default PlayerInput;