import React from 'react';
import TodoList from './todo-list';
import Footer from './footer';

const Main = ({ ...props }) => {
  return (
    <section className="main">
      <TodoList { ...props } />
      <Footer />
    </section>
  );
};

export default Main;
