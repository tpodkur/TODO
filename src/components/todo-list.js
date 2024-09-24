import React, { Component } from 'react';
import ListItem from './listItem';
import PropTypes from 'prop-types';

export default class TodoList extends Component {

  static defaultProps = {
    tasks: [],
    onDeleteTask: () => {},
    onChangeClassname: () => {}
  };

  static propTypes = {
    tasks: PropTypes.array,
    onDeleteTask: PropTypes.func,
    onChangeClassname: PropTypes.func
  };

  render() {
    const listItems = this.props.tasks.map(task =>
      <ListItem
        { ...task }
        key={ task.id }
        onDeleteTask={ () => this.props.onDeleteTask(task.id) }
        onChangeClassname={ this.props.onChangeClassname }
      />
    );

    return (
      <ul className='todo-list'>
        { listItems }
      </ul>
    );
  }
};
