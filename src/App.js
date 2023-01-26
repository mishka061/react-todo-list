import React, {useState} from "react";
import './styles/App.css'

import TodoList from "./component/TodoList";

function App() {
    const [todo, setTodo] = useState([
        {id: 1, title: 'список дел', body: 'Description'},
        {id: 2, title: 'список дел', body: 'Description'},
        {id: 3, title: 'список дел', body: 'Description'},
    ])
    return (
        <div className="App">
            <form>
                <input type="text" placeholder="Название дела"/>
                <input type="text" placeholder="Описание дела"/>
                <button>Создать запись</button>
            </form>
            <TodoList todo={todo} title="Список постов"/>

        </div>
    );
}

export default App;
