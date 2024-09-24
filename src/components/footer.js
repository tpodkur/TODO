import React from 'react';
import TasksFilter from './tasks-filter';

const Footer = ({ activeTasksCount, onTasksFilter, onDeleteCompletedTasks }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{ activeTasksCount } items left</span>
      <TasksFilter onTasksFilter={ onTasksFilter } />
      <button
        className="clear-completed"
        onClick={ onDeleteCompletedTasks }
      >
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  activeTasksCount: 0,
  onTasksFilter: () => {},
  onDeleteCompletedTasks: () => {}
};

export default Footer;
