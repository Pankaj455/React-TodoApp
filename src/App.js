import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import AddTodos from './components/AddTodos'
import Lists from './components/Lists'
import Filter from './components/Filter'

function App() {
  const [todos, setTodos] = useState([])
  const [selected, setSelected] = useState("All")

  useEffect(() => {
    let todolist = JSON.parse(localStorage.getItem('todos')) ?
      JSON.parse(localStorage.getItem('todos'))
      : []
    setTodos(todolist)
  }, [])

  return (
    <div className="container">
      <Header />
      <Filter setSelected={setSelected}/>
      {
        todos.length === 0 ?
          <span className="short-msg">No Tasks To Do...</span>
          : <Lists selected={selected} todos={todos} setTodos={setTodos}/>
      }
      <AddTodos setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
