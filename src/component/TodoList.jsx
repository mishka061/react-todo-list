import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todo, title}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>

            {todo.map((todo )=>
                <TodoItem todo={todo} key={todo.id}/>
            )}
        </div>
    );
};

export default TodoList;