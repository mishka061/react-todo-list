import React, {useState} from "react";
import './styles/App.css'
import TodoList from "./component/TodoList";
import TodoForm from "./component/TodoForm";
import MySelect from "./component/UI/select/MySelect";

function App() {
    const [todo, setTodo] = useState([
        {id: 1, title: 'vbn ', body: 'sdf'},
        {id: 2, title: 'сcvbn', body: 'bnm'},
        {id: 3, title: 'сxcv дел', body: 'xcvbnm'},
    ])
    const [selectedSort, setSelectedSort] = useState('')

    const createTodo = (newTodo) => {
        setTodo([...todo, newTodo])
    }

    const removeTodo = (todos) => {
        setTodo(todo.filter(t => t.id !== todos.id))
    }
    const sortTodo = (sort) => {
        setSelectedSort(sort)
        setTodo([...todo].sort((a, b) => a[sort].localeCompare(b[sort])))
    }
    return (
        <div className="App">
            <TodoForm create={createTodo}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortTodo}
                    defaultValue="сортировка"
                    options={[
                        {value: 'title', name: 'по названию'},
                        {value: 'body', name: 'по описанию'}
                    ]}

                />
            </div>
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
