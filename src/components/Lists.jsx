import TodoItem from './TodoItem'
import { TodoContext } from '../context/TodoProvider'
import { FilterContext } from '../context/FilterProvider'
import { useContext } from 'react'

export default function Lists() {
    const [todos, setTodos] = useContext(TodoContext)
    const selected = useContext(FilterContext)[0]
    return (
        <div className="todos-container">
            {
                todos.length === 0 ?
                    <span className="short-msg">No Tasks To Do...</span>
                    : <ul>
                        {
                            selected === "All" ?
                                todos.map((todo, index) => <TodoItem key={todo.task} id={index} todo={todo} setTodos={setTodos} />)
                                : selected === "Pending" ?
                                    todos
                                        .filter(todo => !todo.completed)
                                        .map(todo => <TodoItem key={todo.task} id={todos.indexOf(todo)} todo={todo} setTodos={setTodos} />)
                                    : todos
                                        .filter(todo => todo.completed)
                                        .map(todo => <TodoItem key={todo.task} id={todos.indexOf(todo)} todo={todo} setTodos={setTodos} />)
                        }
                    </ul>
            }

        </div>
    )
}