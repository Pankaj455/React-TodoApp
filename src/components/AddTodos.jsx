export default function AddTodos({ addTodos }) {
    return (
        <form className="add-todo" onSubmit={addTodos}>
            <input
                type="text"
                placeholder="Add Todo"
            />
            <button ><i className="fas fa-plus-circle"></i></button>
        </form>
    )
}