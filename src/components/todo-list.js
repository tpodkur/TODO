import React, { Component } from 'react';
import Task from './task';

export default class TodoList extends Component {
  listItems = this.props.todos.map(item => <Task { ...item } key={ item.id } />)

  render() {
    return (
      <ul className='todo-list'>
        { this.listItems }
      </ul>
    );
  }
}
