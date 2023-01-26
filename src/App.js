import React, {useState} from "react";
import './styles/App.css'
import TodoItem from "./component/TodoItem";

function App() {
    const [todo, setTodo] = useState([
        {id: 1, title: 'список дел', body: 'Description'},
        {id: 2, title: 'список дел', body: 'Description'},
        {id: 3, title: 'список дел', body: 'Description'},
    ])
    return (
        <div className="App">
            <h1>Список дел</h1>
            {todo.map((todo )=>
                <TodoItem todo={todo} key={todo.id}/>
            )}

        </div>
    );
}

export default App;
