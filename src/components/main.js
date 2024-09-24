import React from 'react';
import TodoList from './todo-list';
import Footer from './footer';
import PropTypes from 'prop-types';

const Main = ({
                activeTasksCount,
                onTasksFilter,
                onDeleteCompletedTasks,
                ...props
}) => {
  return (
    <section className="main">
      <TodoList { ...props } />
      <Footer
        activeTasksCount={ activeTasksCount }
        onTasksFilter={ onTasksFilter }
        onDeleteCompletedTasks = { onDeleteCompletedTasks }
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
  onDeleteCompletedTasks: PropTypes.func
};

export default Main;
