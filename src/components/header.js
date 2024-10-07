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
    min: '',
    sec: '',
  };

  onChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  onChangeMin = (event) => {
    this.setState({ min: event.target.value });
  };

  onChangeSec = (event) => {
    this.setState({ sec: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(event.target.querySelector('.new-todo').value);
    this.setState({ inputValue: '', min: '', sec: '' });
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="Task"
            autoFocus
            onChange={this.onChange}
            value={this.state.inputValue}
          />
          <input
            className="new-todo-form__timer"
            placeholder="Min"
            autoFocus
            onChange={this.onChangeMin}
            value={this.state.min}
          />
          <input
            className="new-todo-form__timer"
            placeholder="Sec"
            autoFocus
            onChange={this.onChangeSec}
            value={this.state.sec}
          />
          <button className="new-todo-form__submit" type="submit">
            add
          </button>
        </form>
      </header>
    );
  }
}
