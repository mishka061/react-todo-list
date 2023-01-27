import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todo, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>

            {todo.map((todo, index) =>
                <TodoItem remove={remove} number={index + 1} todo={todo} key={todo.id}/>
            )}
        </div>
    );
};

export default TodoList;