import React from 'react';
import TodoList from './todo-list';
import Footer from './footer';

const Main = () => {
  return (
    <section className="main">
      <TodoList />
      <Footer />
    </section>
  );
};

export default Main;
