import { useState, useEffect, useContext} from "react"
import { TodoContext } from "../context/TodoProvider"

export default function TodoItem({ todo, id }) {
    const [checked, setChecked] = useState(false)
    const setTodos = useContext(TodoContext)[1]
    
    useEffect(()=>{
        setChecked(todo.completed)
    }, [todo.completed])

    function markTodo(){
        setChecked(!checked)
        const list = JSON.parse(localStorage.getItem('todos'))
        list[id].completed = !list[id].completed
        localStorage.setItem('todos', JSON.stringify(list))
        setTodos(list)
    }

    function removeTodo(){
        const list = JSON.parse(localStorage.getItem('todos'))
        list.splice(id, 1)
        localStorage.setItem('todos', JSON.stringify(list))
        setTodos(list)
    }
    
    return (
        <li className={`todo-item ${checked && "complete"}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={markTodo}
            />
            <span className="todo-text">{todo.task}</span>
            <button className="trash-btn" onClick={removeTodo}><i className="fas fa-trash"></i></button>
        </li>
    )
}