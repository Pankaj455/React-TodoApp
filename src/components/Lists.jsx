import TodoItem from './TodoItem'
export default function Lists({ todos }) {
    return (
        <div className="todos-container">
            <ul>
                {
                    todos.map((todo, index) => <TodoItem key={index} todo={todo} />)
                }
            </ul>
        </div>
    )
}