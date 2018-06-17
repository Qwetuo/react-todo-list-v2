import React, { Component } from "react";
import "./App.css";
import { todos } from "../seedData";
import TodoList from "./TodoList";
// import TodoCreationBar from "./TodoCreationBar"

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      value: ""
    };
  }
  render() {
    return (
      <div>
        <TodoList input={this.state.todos} />
        {/* <Todo /> */}
        {/* <TodoCreationBar /> */}
        <input
          value={this.state.value}
          onChange={event => {
            this.handleChange(event);
          }}
        />
        <button onClick={() => this.handleClick()}>Add todo</button>
      </div>
    );
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  handleClick() {
    const newTodo = {
      name: this.state.value,
      isCompleted: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      value: ""
    });
  }
}

export default App;
