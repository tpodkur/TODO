import React, {Component} from 'react';

export default class Header extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(event.target.querySelector('.new-todo').value);
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={ this.onSubmit }>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
          />
        </form>
      </header>
    );
  }
}
