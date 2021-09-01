import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import AddTodos from './components/AddTodos'
import Lists from './components/Lists'
import Filter from './components/Filter'

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    let todolist = JSON.parse(localStorage.getItem('todos')) ?
      JSON.parse(localStorage.getItem('todos'))
      : []
    setTodos(todolist)
  }, [])

  function addTodos(todo) {
    if (localStorage.getItem('todos')) {
      const list = JSON.parse(localStorage.getItem('todos'))
      list.push(todo)
      localStorage.setItem('todos', JSON.stringify(list))
    } else {
      localStorage.setItem('todos', JSON.stringify([todo]))
    }
    setTodos([...todos, todo])
  }

  function removeTodo(id) {
    const list = JSON.parse(localStorage.getItem('todos'))
    list.splice(id, 1)
    localStorage.setItem('todos', JSON.stringify(list))
    setTodos(prevTodos => {
      let updateTodos = [...prevTodos]
      updateTodos.splice(id, 1)
      return updateTodos
    })
  }
  return (
    <div className="container">
      <Header />
      <Filter />
      {
        todos.length === 0 ?
          <span className="short-msg">No Tasks To Do...</span>
          : <Lists todos={todos} removeTodo={removeTodo} />
      }
      <AddTodos addTodos={addTodos} />
    </div>
  );
}

export default App;
