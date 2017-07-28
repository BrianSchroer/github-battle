import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
};

class Loading extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: props.text 
    };
  }

  componentDidMount() {
    const startingText = this.props.text;
    const maxLength = startingText.length + this.props.maxDots;

    this.interval = window.setInterval(() => {
      const {text} = this.state;
      this.setState({text: (text.length < maxLength) ? text + '.' : startingText});
    }, this.props.speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    );
  }
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number.isRequired,
  maxDots: PropTypes.number.isRequired
};

Loading.defaultProps = {
  text: 'loading',
  speed: 300,
  maxDots: 3
};

export default Loading;