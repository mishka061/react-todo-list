import React, {useState} from "react";
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
    return (
        <div className="App">
            <form>
                <MyInput type="text" placeholder="Название дела"/>
                <MyInput type="text" placeholder="Описание дела"/>
                <MyButton>Создать запись</MyButton>
            </form>
            <TodoList todo={todo} title="Список постов"/>

        </div>
    );
}

export default App;
