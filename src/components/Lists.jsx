import TodoItem from './TodoItem'
export default function Lists() {
    return (
        <div className="todos-container">
            <ul>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </ul>
        </div>
    )
}