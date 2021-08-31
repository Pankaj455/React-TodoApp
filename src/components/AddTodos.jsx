import { useState } from "react"

export default function AddTodos({ addTodos }) {
    const [todo, setTodo] = useState('');
    function handleSubmit(e) {
        e.preventDefault()
        if (todo.trim() !== "") {
            addTodos(todo)
            setTodo('')
        }
    }

    return (
        <form className="add-todo" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add Todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button ><i className="fas fa-plus-circle"></i></button>
        </form>
    )
}