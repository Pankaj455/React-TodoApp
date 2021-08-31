import { useState } from "react"

export default function TodoItem({ todo }) {
    const [checked, setChecked] = useState(false)
    return (
        <li className={`todo-item ${checked && "complete"}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            <span>{!checked ? todo : <strike>{todo}</strike>}</span>
            <button className="trash-btn"><i className="fas fa-trash"></i></button>
        </li>
    )
}