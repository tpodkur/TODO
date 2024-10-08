import React, { Component } from 'react';

import Header from './header';
import Main from './main';
import { ALL, ACTIVE, COMPLETED } from './constants';

export default class App extends Component {
  data = [
    {
      id: '1',
      description: 'Completed task',
      created: new Date('2024-01-01'),
      timer: { min: 12, sec: 32, isRun: false, id: null },
      className: 'completed',
    },
    {
      id: '2',
      description: 'Editing task',
      created: new Date('2024-09-24'),
      timer: { min: 8, sec: 0, isRun: false, id: null },
      className: 'editing',
    },
    {
      id: '3',
      description: 'Active task',
      created: new Date('2024-09-20'),
      timer: { min: 50, sec: 10, isRun: false, id: null },
    },
  ];
  filterStatus = ALL;

  state = {
    tasks: [...this.data],
  };

  getTaskIndexById = (arr, id) => {
    return arr.findIndex((task) => task.id === id);
  };

  onDeleteTask = (id) => {
    const dataIndex = this.getTaskIndexById(this.data, id);
    this.data.splice(dataIndex, 1);

    this.setState({ tasks: [...this.data] }, this.onTasksFilter);
  };

  onChangeClassname = (id, className) => {
    const dataIndex = this.getTaskIndexById(this.data, id);
    this.data[dataIndex].className = className;

    this.setState({ tasks: [...this.data] }, this.onTasksFilter);
  };

  addTask = (text, min, sec) => {
    if (!text.trim().length) return;
    const id = Math.random().toString(16).slice(2);
    const task = {
      id,
      description: text,
      created: new Date(Date.now()),
      timer: { min, sec, isRun: false, id: null },
    };

    this.data.push(task);
    this.setState({ tasks: [...this.data] });
  };

  onUpdateTask = (id, text) => {
    const dataIndex = this.getTaskIndexById(this.data, id);
    this.data[dataIndex].description = text;

    this.setState({ tasks: [...this.data] }, this.onTasksFilter);
  };

  updateTaskTimer = (id, min, sec, timerId, isRun) => {
    const dataIndex = this.getTaskIndexById(this.data, id);
    this.data[dataIndex].timer.min = min;
    this.data[dataIndex].timer.sec = sec;
    this.data[dataIndex].timer.isRun = isRun;
    this.data[dataIndex].timer.id = timerId;

    this.setState({ tasks: [...this.data] }, this.onTasksFilter);
  };

  onTasksFilter = (status = this.filterStatus) => {
    this.setState(({ tasks }) => {
      let filteredTasks;

      if (status === ALL) {
        filteredTasks = [...this.data];
      } else if (status === ACTIVE) {
        filteredTasks = this.data.filter((task) => task.className !== 'completed');
      } else if (status === COMPLETED) {
        filteredTasks = this.data.filter((task) => task.className === 'completed');
      }

      this.filterStatus = status;
      return {
        tasks: filteredTasks ? filteredTasks : tasks,
      };
    });
  };

  onDeleteCompletedTasks = () => {
    let completedTasks = this.data.reduce((acc, task) => {
      if (task.className === 'completed') {
        acc.push(task);
      }
      return acc;
    }, []);

    for (let task of completedTasks) {
      const index = this.data.indexOf(task);
      this.data.splice(index, 1);
    }

    this.setState({ tasks: [...this.data] }, this.onTasksFilter);
  };

  onPlayTimer = (id) => {
    const dataIndex = this.getTaskIndexById(this.data, id);
    const task = this.data[dataIndex];
    if (task.timer.isRun) return;

    this.data[dataIndex].timer.id = setInterval(() => {
      const { min, sec } = task.timer;
      if (sec === 0 && min === 0) {
        clearInterval(task.timer.id);
        this.data[dataIndex].timer.min = 0;
        this.data[dataIndex].timer.sec = 0;
        this.data[dataIndex].timer.id = null;
      } else if (sec === 0) {
        this.data[dataIndex].timer.min = min - 1;
        this.data[dataIndex].timer.sec = 59;
      } else {
        this.data[dataIndex].timer.sec = sec - 1;
      }

      this.setState({ tasks: [...this.data] }, this.onTasksFilter);
    }, 1000);

    this.data[dataIndex].timer.isRun = true;
  };

  onStopTimer = (id) => {
    const dataIndex = this.getTaskIndexById(this.data, id);
    const { min, sec, id: timerId } = this.data[dataIndex].timer;
    clearInterval(timerId);
    this.updateTaskTimer(id, min, sec, null, false);
  };

  clearTimerIntervals = () => {
    for (let i = 0; i < this.data.length; i++) {
      clearInterval(this.data[i].timer.id);
      this.data[i].timer.id = null;
      this.data[i].timer.isRun = false;
    }

    this.setState({ tasks: [...this.data] }, this.onTasksFilter);
  };

  componentWillUnmount() {
    this.clearTimerIntervals();
  }

  render() {
    const activeTasksCount = this.data.reduce((acc, task) => {
      if (task.className !== 'completed') {
        acc++;
      }
      return acc;
    }, 0);

    return (
      <section className="todoapp">
        <Header addTask={this.addTask} />
        <Main
          tasks={this.state.tasks}
          activeTasksCount={activeTasksCount}
          onDeleteTask={this.onDeleteTask}
          onUpdateTask={this.onUpdateTask}
          onChangeClassname={this.onChangeClassname}
          onTasksFilter={this.onTasksFilter}
          onDeleteCompletedTasks={this.onDeleteCompletedTasks}
          onPlayTimer={this.onPlayTimer}
          onStopTimer={this.onStopTimer}
        />
      </section>
    );
  }
}
