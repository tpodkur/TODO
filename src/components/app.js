import React from 'react';
import Header from './header';
import Main from './main';

const App = () => {

  const tasksData = [
    {id: '1', description: 'Completed task', created: 'created 17 seconds ago', className: 'completed'},
    {id: '2', description: 'Editing task', created: 'created 5 minutes ago', className: 'editing'},
    {id: '3', description: 'Active task', created: 'created 5 minutes ago'}
  ];

  return (
    <section className="todoapp">
      <Header />
      <Main todos={ tasksData } />
    </section>
  );
}

export default App;
