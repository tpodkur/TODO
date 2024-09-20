import React from 'react';
import TodoList from './todo-list';
import Footer from './footer';

const Main = ({ todos }) => {
  return (
    <section className="main">
      <TodoList todos={ todos } />
      <Footer />
    </section>
  );
};

export default Main;
