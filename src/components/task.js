import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

export default class Task extends Component {
  static defaultProps = {
    id: '',
    description: '',
    created: '',
    className: '',
    timer: { min: 0, sec: 0 },
    onDeleteTask: () => {},
    onUpdateTask: () => {},
    onUpdateTaskTimer: () => {},
    onChangeClassname: () => {},
  };

  static propTypes = {
    id: PropTypes.string,
    description: PropTypes.string,
    created: PropTypes.instanceOf(Date),
    className: PropTypes.string,
    timer: PropTypes.object,
    onDeleteTask: PropTypes.func,
    onUpdateTask: PropTypes.func,
    onUpdateTaskTimer: PropTypes.func,
    onChangeClassname: PropTypes.func,
  };

  state = {
    inputValue: this.props.description,
    min: this.props.timer.min,
    sec: this.props.timer.sec,
  };

  minIntervalId;
  secIntervalId;

  onToggleCompleteCheckbox = (event) => {
    this.props.onChangeClassname(this.props.id, event.target.checked ? 'completed' : '');
  };

  onEditTask = () => {
    if (this.props.className === 'completed') return;
    this.props.onChangeClassname(this.props.id, 'editing');
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onUpdateTask(this.props.id, this.state.inputValue);
    this.props.onChangeClassname(this.props.id, '');
  };

  onChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  onPlayTimer = () => {
    this.secIntervalId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.sec === 0 && prevState.min === 0) {
          clearInterval(this.secIntervalId);
          clearInterval(this.minIntervalId);
          return { min: 0, sec: 0 };
        }

        if (prevState.sec === 0) {
          return { min: prevState.min - 1, sec: 59 };
        }

        return {
          sec: prevState.sec - 1,
        };
      });
    }, 1000);
  };

  onStopTimer = () => {
    clearInterval(this.minIntervalId);
    clearInterval(this.secIntervalId);
    this.props.onUpdateTaskTimer(this.props.id, this.state.min, this.state.sec);
  };

  renderTime = (value) => {
    return value < 10 ? '0' + value : value;
  };

  componentWillUnmount() {
    clearInterval(this.minIntervalId);
    clearInterval(this.secIntervalId);
  }

  render() {
    return (
      <React.Fragment>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={this.onToggleCompleteCheckbox}
            checked={this.props.className === 'completed'}
          />
          <label>
            <span className="title">{this.props.description}</span>
            <span className="description">
              <button className="icon icon-play" onClick={this.onPlayTimer}></button>
              <button className="icon icon-pause" onClick={this.onStopTimer}></button>
              {this.renderTime(this.state.min)}:{this.renderTime(this.state.sec)}
            </span>
            <span className="description">{formatDistanceToNow(this.props.created)}</span>
          </label>
          <button className="icon icon-edit" onClick={this.onEditTask}></button>
          <button className="icon icon-destroy" onClick={this.props.onDeleteTask}></button>
        </div>
        {this.props.className === 'editing' && (
          <form onSubmit={this.onSubmit}>
            <input type="text" className="edit" value={this.state.inputValue} onChange={this.onChange} />
          </form>
        )}
      </React.Fragment>
    );
  }
}
