import React from 'react';
import MyButton from "./UI/button/MyButton";

const TodoItem = (props) => {
    console.log(props)
    return (
        <div className="todo">
            <div className="todo__content">
                <strong>{props.number}. {props.todo.title}</strong>
                <div>{props.todo.body}</div>
            </div>
            <div className="todo__btns">
                <MyButton onClick={() => props.remove(props.todo)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default TodoItem;