import React, { Component } from "react";
import ConfirmationButton from "../../../../lib/components/confirmation-button/confirmation-button";

class TechnologyTag extends Component {
  handleTagClick = () => {
    if (this.props.isDisabled || this.props.isBeingEdited) return;
    this.props.handleTechFilter(this.props.technology._id);
  };

  deleteTechnology = event => {
    event.preventDefault();
    const technologyId = event.target.value;
    this.props.deleteTechnology(technologyId);
  };

  render() {
    const activeClass = this.props.isActiveFilter ? "bg-dark-red white" : "";
    let disabledClass;
    let cursor;
    if (this.props.isDisabled) {
      disabledClass = "bg-light-gray";
      cursor = "not-allowed";
    } else {
      disabledClass = "";
      cursor = "pointer";
    }
    const tagStyle = {
      cursor
    };

    let removeButton;
    if (this.props.isBeingEdited) {
      removeButton = (
        <ConfirmationButton onClick={this.deleteTechnology}>
          <button
            className="f7 f7-ns b dib ma0 dark-gray ml2 b--none bg-transparent pa0 w1"
            value={this.props.technology._id}
          >
            x
          </button>
        </ConfirmationButton>
      );
    }

    let agentCountIcon;
    if (this.props.agentCount >= 0) {
      agentCountIcon = ` | ${this.props.agentCount}`;
    }

    return (
      <li
        key={`technology-tag-${this.props.technology.name}`}
        className={`dib mr1 mb1`}
        onClick={this.handleTagClick}
      >
        <div
          className={`f7 f5-ns b db pa2 ma0 mid-gray ba b--black-20 unselectable ${activeClass} ${disabledClass}`}
          style={tagStyle}
        >
          {this.props.technology.name}
          {agentCountIcon}
          {removeButton}
        </div>
      </li>
    );
  }
}

export default TechnologyTag;
