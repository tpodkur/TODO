import React, { Component } from 'react';
import Header from './header';
import Main from './main';

export default class App extends Component {
  state = {
    tasks: [
      { id: '1', description: 'Completed task', created: 'created 17 seconds ago', className: 'completed' },
      { id: '2', description: 'Editing task', created: 'created 5 minutes ago', className: 'editing' },
      { id: '3', description: 'Active task', created: 'created 5 minutes ago' }
    ]
  };

  getTaskIndexById = (id) => {
    return this.state.tasks.findIndex((task) => task.id === id);
  }

  onDeleteTask = (id) => {
    const index = this.getTaskIndexById(id);
    if (index < 0) return;

    this.setState( ({ tasks }) => ({
      tasks: [
        ...tasks.slice(0, index),
        ...tasks.slice(index + 1)
      ]
    }));
  }

  onChangeClassname = (id, className) => {
    const index = this.getTaskIndexById(id);
    if (index < 0) return;

    this.setState(({ tasks }) => {
      const oldTask = tasks[index];
      const newTask = { ...oldTask, className };

      return {
        tasks: [
          ...tasks.slice(0, index),
          newTask,
          ...tasks.slice(index + 1)
        ]
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <Header />
        <Main
          tasks={ this.state.tasks }
          onDeleteTask={ this.onDeleteTask }
          onChangeClassname={ this.onChangeClassname }
        />
      </section>
    );
  }
}
