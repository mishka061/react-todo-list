import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const TodoForm = ({create}) => {
    const [todo, setTodo] = useState({title: '', body: ''})

    const addNewTodo = (e) => {
        e.preventDefault()
        const newTodo = {
            ...todo, id: Date.now()
        }
        create(newTodo)
        setTodo({title: '', body: ''})
    }



    return (
        <form>
            {/* Управляемый компонент*/}
            <MyInput
                value={todo.title}
                onChange={e => setTodo( {...todo, title: e.target.value})}
                type="text"
                placeholder="Название дела"
            />
            <MyInput
                value={todo.body}
                onChange={e => setTodo( {...todo, body: e.target.value})}
                type="text"
                placeholder="Описание дела"
            />
            <MyButton
                onClick={addNewTodo}
            >
                Создать запись
            </MyButton>
        </form>
    );
};

export default TodoForm;