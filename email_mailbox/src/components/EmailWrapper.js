import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Email from './Email';

class EmailWrapper extends Component {
  constructor() {
    super();
    this.state = {
      displayEmail: false
    };
  }

  render() {
    return (
      <Email
        displayEmail={this.state.displayEmail}
        onToggleEmail={this.onToggleEmail}
        {...this.props}
      />
    );
  }

  onToggleEmail = () => {
    if (!this.props.staticOpen) {
      this.setState({
        displayEmail: !this.state.displayEmail
      });
    }
  };
}

EmailWrapper.propTypes = {
  displayEmail: PropTypes.func,
  staticOpen: PropTypes.bool
};

export default EmailWrapper;