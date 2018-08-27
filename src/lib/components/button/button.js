import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        value={ this.props.value }
        className={`bn f4 b no-underline br-pill ph3 pv1 mb2 dib white bg-${ this.props.color } unselectable ma1`}
        style={{ cursor: "pointer" }}
        onClick={ this.props.onClick }
      >
        { this.props.children }
      </button>
    );
  }
}

export default Button;