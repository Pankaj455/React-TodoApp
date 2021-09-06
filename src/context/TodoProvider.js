import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext()

export default function TodoProvider(props){
    const [todos, setTodos] = useState([])
    useEffect(() => {
        let todolist = JSON.parse(localStorage.getItem('todos')) ?
          JSON.parse(localStorage.getItem('todos'))
          : []
        setTodos(todolist)
      }, [])

    return (
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    )
}

