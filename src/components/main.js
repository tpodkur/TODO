import React from 'react';
import TodoList from './todo-list';
import Footer from './footer';

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

Main.defaultProps = {
  tasks: [],
  activeTasksCount: 0,
  onDeleteTask: () => {},
  onChangeClassname: () => {},
  onTasksFilter: () => {},
  onDeleteCompletedTasks: () => {}
};

export default Main;
