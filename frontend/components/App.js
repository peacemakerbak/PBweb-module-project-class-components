import React from 'react';
import Form from './Form';  
import TodoList from './TodoList';  

export default class App extends React.Component {
  
  state = {
    todos: [
      {
        name: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        name: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ],
    inputText: ''
  };

  // handleInput updates the state with the current value in the input field
  handleInput = (event) => {
    this.setState({ inputText: event.target.value });
  };

  // handleSubmit adds a new todo to the todos array in state when the form is submitted
  handleSubmit = (event) => {
    event.preventDefault();  // prevent the default form submit 
    const trimmedInput = this.state.inputText.trim();
    if (trimmedInput !== '') {  // Checks if the input is not just whitespace
      const newTodo = {
        name: trimmedInput,
        id: Date.now(), // Generates a unique ID based on the current timestamp
        completed: false  // New todos are marked as not completed by default
      };
      this.setState({
        todos: [...this.state.todos, newTodo],  // Adds the new todo to the existing todos array
        inputText: ''  // Resets the inputText to empty, clearing the input field
      });
    }
  };

  //toggles the completed status of a todo item
  handleToggleComplete = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    });
  };

  // delete completed tasks form the list
  handleClearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

 


  render() {
    return (
      <div>
        <h1> Peacemaker's Todo App</h1> 
        <Form
          inputText={this.state.inputText}  
          handleInput={this.handleInput}  
          handleSubmit={this.handleSubmit}  
          handleClearCompleted={this.handleClearCompleted} 
        />
        <TodoList
          todos={this.state.todos}  
          handleToggleComplete={this.handleToggleComplete}  
        />
      </div>
    );
  }
}