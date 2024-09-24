import React, { Component } from 'react';

export default class Task extends Component {
  render() {
    return (
    <React.Fragment>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={ this.props.onChangeClassname }
          checked={ this.props.className === 'completed' }
        />
        <label>
          <span className="description">{ this.props.description }</span>
          <span className="created">{ this.props.created }</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={ this.props.onDeleteTask }></button>
      </div>
      { this.props.className === 'editing' && <input type='text' className='edit' defaultValue='Editing task'/> }
    </React.Fragment>
    );
  }
}
