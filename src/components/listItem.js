import React from 'react';
import Task from './task';

export default class ListItem extends React.Component {

  state = {
    className: this.props.className
  }

  onChangeClassname = (className) => {
    this.setState({ className });
  };

  render() {
    return (
      <li className={ this.state.className }>
        <Task
          { ...this.props }
          onChangeClassname = { this.onChangeClassname }
        />
      </li>
    );
  }
}
