import React from 'react';
import TodoList from './todo-list';
import Footer from './footer';

const Main = ({ onTasksFilter, ...props }) => {
  return (
    <section className="main">
      <TodoList { ...props } />
      <Footer onTasksFilter={ onTasksFilter } />
    </section>
  );
};

export default Main;
