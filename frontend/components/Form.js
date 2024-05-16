import React from 'react';

export default class Form extends React.Component {
  render() {
    // connect the props to the form from App.js
    const { inputText, handleInput, handleSubmit, handleClearCompleted } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text" value={inputText} onChange={handleInput} placeholder="enter new todo here"
        />
        <button type="submit">Add Todo</button>
        {/* Button for clearing all completed todos. It does not submit the form, hence 'type="button"'. */}
        <button type="button" onClick={handleClearCompleted}>Clear Completed</button>
      </form>
    );
  }
}