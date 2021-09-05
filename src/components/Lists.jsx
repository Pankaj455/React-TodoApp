import TodoItem from './TodoItem'

export default function Lists({ selected, todos, setTodos }) {
    return (
        <div className="todos-container">
            <ul>
                {
                    selected === "All" ?
                    todos.map((todo, index) =>{
                        return <TodoItem key={todo.task} id={index} todo={todo} setTodos={setTodos} />
                    }
                    )
                    : selected === "Pending" ?
                        todos.filter(todo=>{
                            return todo.completed === false
                        }).map(todo=>
                            <TodoItem key={todo.task} id={todos.indexOf(todo)} todo={todo} setTodos={setTodos} />
                        )
                    : todos.filter(todo=>{
                            return todo.completed
                        }).map(todo=>
                            <TodoItem key={todo.task} id={todos.indexOf(todo)} todo={todo} setTodos={setTodos} />
                        )
                }
            </ul>
        </div>
    )
}