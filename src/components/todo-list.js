import React, { Component } from 'react';
import ListItem from './listItem';

export default class TodoList extends Component {

  render() {
    const listItems = this.props.tasks.map(task =>
      <ListItem
        { ...task }
        key={ task.id }
        onDeleteTask={ () => this.props.onDeleteTask(task.id) }
      />
    );

    return (
      <ul className='todo-list'>
        { listItems }
      </ul>
    );
  }
}
