import React, { Component } from 'react';

class FormLabel extends Component {
  render() {
    return (
      <label htmlFor={this.props.htmlFor} className="f5 b db mb2">{ this.props.children }</label>
    );
  }
}

export default FormLabel;
