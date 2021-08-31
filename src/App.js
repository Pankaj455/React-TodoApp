import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import AddTodos from './components/AddTodos'
import Lists from './components/Lists'

function App() {
  const [todos, setTodos] = useState([])
  function addTodos(todo) {
    setTodos([...todos, todo])
  }

  return (
    <div className="container">
      <Header />
      <Lists todos={todos} />
      <AddTodos addTodos={addTodos} />
    </div>
  );
}

export default App;
