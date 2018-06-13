import {todos} from "../seedData";
import React, { Component } from 'react';
import Title from "./Title"

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            todos: todos
        }
    }
    render() {
        return (
            <div>
                <Title />
                <ul>
                    {this.state.todos.map((todos,index) => {
                        return <li key={index}>{todos.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default TodoList;