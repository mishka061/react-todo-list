import React from 'react';

const TodoItem = (props) => {
    console.log(props)
    return (
        <div className="todo">
            <div className="todo__content">
                <strong>{props.todo.id}. {props.todo.title}</strong>
                <div>{props.todo.body}</div>
            </div>
            <div className="todo__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default TodoItem;