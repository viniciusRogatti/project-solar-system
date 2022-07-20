import { string } from 'prop-types';
import React, { Component } from 'react';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{ headline }</h2>
    );
  }
}

Title.propTypes = string;

export default Title;
