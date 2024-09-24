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
  filterStatus = ALL;

  state = {
    tasks: [ ...this.data ]
  };

  getTaskIndexById = (arr, id) => {
    return arr.findIndex((task) => task.id === id);
  };

  onDeleteTask = (id) => {
    const dataIndex = this.getTaskIndexById(this.data, id);
    this.data.splice(dataIndex, 1);

    this.setState(
      ({ tasks: [ ...this.data ] }),
      this.onTasksFilter
    );
  };

  onChangeClassname = (id, className) => {
    const dataIndex = this.getTaskIndexById(this.data, id);
    this.data[dataIndex].className = className;

    this.setState(
      ({ tasks: [ ...this.data ] }),
      this.onTasksFilter
    );
  };

  addTask = (text) => {
    const id = Math.random().toString(16).slice(2);
    const task = { id, description: text, created: 'created 5 minutes ago' };

    this.data.push(task);
    this.setState(({ tasks: [ ...this.data ] }));
  };

  onTasksFilter = (status = this.filterStatus) => {
    this.setState(({ tasks }) => {
      let filteredTasks;

      if (status === ALL) {
        filteredTasks = [ ...this.data ];
      } else if (status === ACTIVE) {
        filteredTasks = this.data.filter((task) => !task.className);
      } else if (status === COMPLETED) {
        filteredTasks = this.data.filter((task) => task.className === 'completed');
      }

      this.filterStatus = status;
      return {
        tasks: filteredTasks ? filteredTasks : tasks
      }
    });
  };

  onDeleteCompletedTasks = () => {
    let completedTasks = this.data.reduce((acc, task, i) => {
      if (task.className === 'completed') {
        acc.push(task);
      }
      return acc;
    }, []);

    for (let task of completedTasks) {
      const index = this.data.indexOf(task);
      this.data.splice(index, 1);
    }

    this.setState(
      ({ tasks: [ ...this.data ] }),
      this.onTasksFilter
    );
  };

  render() {
    const activeTasksCount = this.data.reduce((acc, task) => {
      if (task.className !== 'completed') {
        acc++;
      }
      return acc;
    }, 0);

    return (
      <section className="todoapp">
        <Header addTask={ this.addTask } />
        <Main
          tasks={ this.state.tasks }
          activeTasksCount={ activeTasksCount }
          onDeleteTask={ this.onDeleteTask }
          onChangeClassname={ this.onChangeClassname }
          onTasksFilter={ this.onTasksFilter }
          onDeleteCompletedTasks = { this.onDeleteCompletedTasks }
        />
      </section>
    );
  }
};
