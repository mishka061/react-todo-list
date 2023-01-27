import React, {useState} from "react";
import './styles/App.css'
import TodoList from "./component/TodoList";
import TodoForm from "./component/TodoForm";

function App() {
    const [todo, setTodo] = useState([
        {id: 1, title: 'список дел', body: 'Description'},
        {id: 2, title: 'список дел', body: 'Description'},
        {id: 3, title: 'список дел', body: 'Description'},
    ])
    const createTodo = (newTodo) => {
        setTodo([...todo, newTodo])
    }

    const removeTodo = (todos) => {
        setTodo(todo.filter(t => t.id !== todos.id))
    }

    return (
        <div className="App">
            <TodoForm create={createTodo}></TodoForm>
            {todo.length
                ?
                <TodoList remove={removeTodo} todo={todo} title="Список постов"/>
                :
                <h1 style={{textAlign: 'center'}}>
                    Список не найден !
                </h1>
            }
        </div>
    );
}

export default App;
