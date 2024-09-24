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
    onChangeClassname: () => {}
  };

  static propTypes = {
    id: PropTypes.string,
    description: PropTypes.string,
    created: PropTypes.instanceOf(Date),
    className: PropTypes.string,
    onDeleteTask: PropTypes.func,
    onChangeClassname: PropTypes.func
  };

  toggleClassName = (event) => {
    this.props.onChangeClassname(this.props.id, event.target.checked ? 'completed' : '')
  };

  render() {
    return (
      <React.Fragment>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={ this.toggleClassName }
            checked={ this.props.className === 'completed' }
          />
          <label>
            <span className="description">{ this.props.description }</span>
            <span className="created">{ formatDistanceToNow(this.props.created) }</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={ this.props.onDeleteTask }></button>
        </div>
        { this.props.className === 'editing' && <input type='text' className='edit' defaultValue='Editing task'/> }
      </React.Fragment>
    );
  }
};
