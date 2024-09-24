import React, { Component } from 'react';

export default class Task extends Component {

  state = {
    id: this.props.id,
    description: this.props.description,
    created: this.props.created,
    className: this.props.className
  }

  toggleTaskClass = (event) => {
    const newClassName = event.target.checked ? 'completed' : '';
    this.setState({ className: newClassName });
    this.props.onChangeClassname(newClassName);
  }

  render() {
    return (
    <React.Fragment>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={ this.toggleTaskClass }
          checked={ this.state.className === 'completed' }
        />
        <label>
          <span className="description">{ this.state.description }</span>
          <span className="created">{ this.state.created }</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={ this.props.onDeleteTask }></button>
      </div>
      { this.state.className === 'editing' && <input type='text' className='edit' defaultValue='Editing task'/> }
    </React.Fragment>
    );
  }
}
