import React from 'react';
import PropTypes from 'prop-types';

import TodoList from './todo-list';
import Footer from './footer';

const Main = ({ activeTasksCount, onTasksFilter, onDeleteCompletedTasks, ...props }) => {
  return (
    <section className="main">
      <TodoList {...props} />
      <Footer
        activeTasksCount={activeTasksCount}
        onTasksFilter={onTasksFilter}
        onDeleteCompletedTasks={onDeleteCompletedTasks}
      />
    </section>
  );
};

Main.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  activeTasksCount: PropTypes.number,
  onDeleteTask: PropTypes.func,
  onChangeClassname: PropTypes.func,
  onTasksFilter: PropTypes.func,
  onDeleteCompletedTasks: PropTypes.func,
  onUpdateTask: PropTypes.func,
  onPlayTimer: PropTypes.func,
  onStopTimer: PropTypes.func,
};

export default Main;
