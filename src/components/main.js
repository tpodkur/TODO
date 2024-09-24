import React from 'react';
import TodoList from './todo-list';
import Footer from './footer';

const Main = ({ onTasksFilter, onDeleteCompletedTasks, ...props }) => {
  return (
    <section className="main">
      <TodoList { ...props } />
      <Footer
        onTasksFilter={ onTasksFilter }
        onDeleteCompletedTasks = { onDeleteCompletedTasks }
      />
    </section>
  );
};

export default Main;
