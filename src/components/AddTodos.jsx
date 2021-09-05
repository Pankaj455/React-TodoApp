import { useState } from "react"

export default function AddTodos({ setTodos, todos }) {
    const [todo, setTodo] = useState({ task: "", completed: false });
    
    function addTodo(e) {
        e.preventDefault()
        if (todo.task.trim() !== "") {
            if (localStorage.getItem('todos')) {
                const list = JSON.parse(localStorage.getItem('todos'))
                list.push(todo)
                localStorage.setItem('todos', JSON.stringify(list))
              } else {
                localStorage.setItem('todos', JSON.stringify([todo]))
              }
            setTodos([...todos, todo])
            setTodo({ task: "", completed: false })
        }
    }

    return (
        <form className="add-todo" onSubmit={addTodo}>
            <input
                type="text"
                placeholder="Add Todo"
                value={todo.task}
                onChange={(e) => setTodo({ ...todo, task: e.target.value })}
            />
            <button ><i className="fas fa-plus-circle"></i></button>
        </form>
    )
}