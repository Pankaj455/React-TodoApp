import TodoItem from './TodoItem'
export default function Lists({ todos, removeTodo }) {
    return (
        <div className="todos-container">
            <ul>
                {
                    todos.map((todo, index) =>
                        <TodoItem key={index} id={index} todo={todo} removeTodo={removeTodo} />
                    )
                }
            </ul>
        </div>
    )
}