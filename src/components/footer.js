import React from 'react';
import PropTypes from 'prop-types';

import TasksFilter from './tasks-filter';

const Footer = ({ activeTasksCount, onTasksFilter, onDeleteCompletedTasks }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{activeTasksCount} items left</span>
      <TasksFilter onTasksFilter={onTasksFilter} />
      <button className="clear-completed" onClick={onDeleteCompletedTasks}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  activeTasksCount: PropTypes.number,
  onTasksFilter: PropTypes.func,
  onDeleteCompletedTasks: PropTypes.func,
};

export default Footer;
