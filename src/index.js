import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Main from './components/main';

const App = () => {
  return (
    <section className="todoapp">
      <Header />
      <Main />
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
