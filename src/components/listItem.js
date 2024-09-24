import React from 'react';
import Task from './task';

export default class ListItem extends React.Component {

  state = {
    className: this.props.className
  }

  onChangeClassname = (event) => {
    this.setState({ className: event.target.checked ? 'completed' : '' });
  };

  render() {
    return (
      <li className={ this.state.className }>
        <Task
          { ...this.props }
          className={ this.state.className }
          onChangeClassname = { this.onChangeClassname }
        />
      </li>
    );
  }
}
