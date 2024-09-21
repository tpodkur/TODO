import React, { Component } from 'react';

export default class Task extends Component {

  state = {
    id: this.props.id,
    description: this.props.description,
    created: this.props.created,
    className: this.props.className
  }

  toggleTaskClass(event) {
    const newState = {...this.state, className: event.target.checked ? 'completed' : 'no'};
    this.setState(newState);
  }

  render() {
    return (
    <li className={ this.state.className }>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={ (e) => this.toggleTaskClass(e) }/>
        <label>
          <span className="description">{this.state.description}</span>
          <span className="created">{this.state.created}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      { this.state.className === 'editing' && <input type='text' className='edit' defaultValue='Editing task'/> }
    </li>
    );
  }
}
