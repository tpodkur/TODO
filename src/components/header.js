import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  static defaultProps = {
    addTask: () => {},
  };

  static propTypes = {
    addTask: PropTypes.func,
  };

  state = {
    inputValue: '',
  };

  onChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(event.target.querySelector('.new-todo').value);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={this.onChange}
            value={this.state.inputValue}
          />
        </form>
      </header>
    );
  }
}
