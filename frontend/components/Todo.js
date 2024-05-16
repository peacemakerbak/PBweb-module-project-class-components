import React from 'react';

export default class Todo extends React.Component {
  toggleTodo = () => {
    // method called when the Todo is clicked.
    this.props.handleToggleComplete(this.props.todo.id);
  }

  render() { 
    const { todo } = this.props; 


    return (
      <div onClick={this.toggleTodo} style={{ display: 'flex', alignItems: 'center' }}>
        {todo.completed && <span style={{ marginRight: 5 }}> ✌🏿 </span>}
        {todo.name}
      </div>
    );
  }
}