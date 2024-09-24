import React, { Component } from 'react';
import Header from './header';
import Main from './main';
import { ALL, ACTIVE, COMPLETED } from './constants';

export default class App extends Component {

  data = [
    { id: '1', description: 'Completed task', created: 'created 17 seconds ago', className: 'completed' },
    { id: '2', description: 'Editing task', created: 'created 5 minutes ago', className: 'editing' },
    { id: '3', description: 'Active task', created: 'created 5 minutes ago' }
  ];

  state = {
    tasks: [ ...this.data ]
  };

  getTaskIndexById = (arr, id) => {
    return arr.findIndex((task) => task.id === id);
  }

  onDeleteTask = (id) => {
    const dataIndex = this.getTaskIndexById(this.data, id);
    this.data.splice(dataIndex, 1);

    const index = this.getTaskIndexById(this.state.tasks, id);
    this.setState( ({ tasks }) => ({
      tasks: [
        ...tasks.slice(0, index),
        ...tasks.slice(index + 1)
      ]
    }));
  }

  onChangeClassname = (id, className) => {
    const dataIndex = this.getTaskIndexById(this.data, id);
    this.data[dataIndex].className = className;

    this.setState(({ tasks }) => {
      const index = this.getTaskIndexById(this.state.tasks, id);
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

  addTask = (text) => {
    const id = Math.random().toString(16).slice(2);
    const task = { id, description: text, created: 'created 5 minutes ago' };

    this.data.push(task);
    this.setState(({ tasks }) => ({
      tasks: [
        ...tasks,
        task
      ]
    }));
  };

  onTasksFilter = (status) => {
    this.setState(({ tasks }) => {
      let filteredTasks;

      if (status === ALL) {
        filteredTasks = [ ...this.data ];
      } else if (status === ACTIVE) {
        filteredTasks = this.data.filter((task) => !task.className);
      } else if (status === COMPLETED) {
        filteredTasks = this.data.filter((task) => task.className === 'completed');
      }

      return {
        tasks: filteredTasks ? filteredTasks : tasks
      }
    });
  };

  render() {
    return (
      <section className="todoapp">
        <Header addTask={ this.addTask } />
        <Main
          tasks={ this.state.tasks }
          onDeleteTask={ this.onDeleteTask }
          onChangeClassname={ this.onChangeClassname }
          onTasksFilter={ this.onTasksFilter }
        />
      </section>
    );
  }
}
