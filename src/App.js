import React, {useRef, useState} from "react";
import './styles/App.css'

import TodoList from "./component/TodoList";
import MyButton from "./component/UI/button/MyButton";
import MyInput from "./component/UI/input/MyInput";

function App() {
    const [todo, setTodo] = useState([
        {id: 1, title: 'список дел', body: 'Description'},
        {id: 2, title: 'список дел', body: 'Description'},
        {id: 3, title: 'список дел', body: 'Description'},
    ])

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNewTodo = (e) => {
        e.preventDefault()
        const newTodo = {
            id: Date.now(),
            title,
            body
        }
        setTodo([...todo, newTodo])
    }

    return (
        <div className="App">
            <form>
                {/* Управляемый компонент*/}
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Название дела"
                />
                <MyInput
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    type="text"
                    placeholder="Описание дела"
                />
                <MyButton
                    onClick={addNewTodo}
                >
                    Создать запись
                </MyButton>
            </form>
            <TodoList todo={todo} title="Список постов"/>

        </div>
    );
}

export default App;
