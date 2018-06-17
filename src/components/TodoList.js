import React from 'react';
import Title from "./Title"

const TodoList = props => {
    return (
        <div>
            <Title />
            <ul>
               {props.input.map((todos,index) => {
                   return <li
                   onClick={event => {
                       todos.isCompleted = true;
                       if (todos.isCompleted === true) {
                        event.target.classList.add("strike")
                    }
                   }}
                   key={index}>{todos.name}</li>
               })}
            </ul>
        </div>
    )
}

export default TodoList;