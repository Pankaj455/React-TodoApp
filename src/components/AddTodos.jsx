import { useState } from "react"

export default function AddTodos({ addTodos }) {
    const [todo, setTodo] = useState({ task: "", completed: false });
    function handleSubmit(e) {
        e.preventDefault()
        if (todo.task.trim() !== "") {
            addTodos(todo)
            setTodo({ task: "", completed: false })
        }
    }

    return (
        <form className="add-todo" onSubmit={handleSubmit}>
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