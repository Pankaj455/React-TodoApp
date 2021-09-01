import { useState } from "react"

export default function TodoItem({ todo, removeTodo, id }) {
    const [checked, setChecked] = useState(false)
    return (
        <li className={`todo-item ${checked && "complete"}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            <span className="todo">{todo}</span>
            <button className="trash-btn" onClick={() => removeTodo(id)}><i className="fas fa-trash"></i></button>
        </li>
    )
}