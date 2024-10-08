import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ValidationPopup from './validation-popup';

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
    if (!this.validateTimerFields(this.state.min, this.state.sec)) return;

    const min = this.state.min.length ? +this.state.min : 0;
    const sec = this.state.sec.length ? +this.state.sec : 0;
    this.props.addTask(event.target.querySelector('.new-todo').value, min, sec);
    this.setState({ inputValue: '', min: '', sec: '' });
  };

  validateTimerFields = (min, sec) => {
    if (!this.isTimeValid(min) || !this.isTimeValid(sec)) {
      this.showPopup();
      return false;
    }
    return true;
  };

  showPopup = () => {
    const popup = document.querySelector('.timer-validation');
    popup.style.opacity = '100%';
    setTimeout(() => {
      popup.style.opacity = '0';
    }, 1500);
  };

  isTimeValid = (value) => {
    if (value.length === 0) return true;
    return +value > 0 && +value < 59;
  };

  render() {
    return (
      <header className="header">
        <div className="timer-validation">
          <ValidationPopup message="Please enter a number from 0 to 59" />
        </div>
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
