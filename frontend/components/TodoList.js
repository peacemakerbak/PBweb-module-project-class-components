import React from 'react';
import Todo from './Todo';  // Import the Todo component

export default class TodoList extends React.Component {
  render() {
    const { todos, handleToggleComplete } = this.props;  // Destructure props to get todos and the handleToggleComplete method

    return (
      <div>
        {todos.map(todo => (
          <Todo
            key={todo.id}  // Using the todo id for key prop to ensure the list renders
            todo={todo}  // passing the todo object as a prop 
            handleToggleComplete={handleToggleComplete}  // Pass the handleToggleComplete method to each Todo component
          />
        ))}
      </div>
    );
  }
}