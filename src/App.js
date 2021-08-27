import './App.css'
import Header from './components/Header'
import AddTodos from './components/AddTodos'
import Lists from './components/Lists'

function App() {

  function addTodos(e) {
    e.preventDefault()
    console.log("submiteed")
  }

  return (
    <div className="container">
      <Header />
      <Lists />
      <AddTodos addTodos={addTodos} />
    </div>
  );
}

export default App;
