import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns'

export default class Task extends Component {

  static defaultProps = {
    id: '',
    description: '',
    created: '',
    className: '',
    onDeleteTask: () => {},
    onUpdateTask: () => {},
    onChangeClassname: () => {}
  };

  static propTypes = {
    id: PropTypes.string,
    description: PropTypes.string,
    created: PropTypes.instanceOf(Date),
    className: PropTypes.string,
    onDeleteTask: PropTypes.func,
    onUpdateTask: PropTypes.func,
    onChangeClassname: PropTypes.func
  };

  state = {
    inputValue: this.props.description
  };

  onToggleCompleteCheckbox = (event) => {
    this.props.onChangeClassname(this.props.id, event.target.checked ? 'completed' : '')
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

  render() {
    return (
      <React.Fragment>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={ this.onToggleCompleteCheckbox }
            checked={ this.props.className === 'completed' }
          />
          <label>
            <span className="description">{ this.props.description }</span>
            <span className="created">{ formatDistanceToNow(this.props.created) }</span>
          </label>
          <button className="icon icon-edit" onClick={ this.onEditTask }></button>
          <button className="icon icon-destroy" onClick={ this.props.onDeleteTask }></button>
        </div>
        { this.props.className === 'editing' &&
          <form onSubmit={ this.onSubmit }>
            <input
              type='text'
              className='edit'
              value={ this.state.inputValue }
              onChange={ this.onChange }
            />
          </form>
        }
      </React.Fragment>
    );
  }
};
