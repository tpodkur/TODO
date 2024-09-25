import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ALL, ACTIVE, COMPLETED } from './constants';

export default class TasksFilter extends Component {
  static defaultProps = {
    onTasksFilter: () => {},
  };

  static propTypes = {
    onTasksFilter: PropTypes.func,
  };

  state = {
    [ALL]: true,
    [ACTIVE]: false,
    [COMPLETED]: false,
  };

  onTasksFilter = (event) => {
    const filterObject = {
      [ALL]: false,
      [ACTIVE]: false,
      [COMPLETED]: false,
    };
    const filter = event.target.dataset.filter;
    this.setState({ ...filterObject, [filter]: true });

    this.props.onTasksFilter(filter);
  };

  render() {
    return (
      <ul className="filters" onClick={this.onTasksFilter}>
        <li>
          <button className={this.state[ALL] ? 'selected' : ''} data-filter={ALL}>
            All
          </button>
        </li>
        <li>
          <button className={this.state[ACTIVE] ? 'selected' : ''} data-filter={ACTIVE}>
            Active
          </button>
        </li>
        <li>
          <button className={this.state[COMPLETED] ? 'selected' : ''} data-filter={COMPLETED}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
