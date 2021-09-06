import './App.css'
import Header from './components/Header'
import AddTodos from './components/AddTodos'
import Lists from './components/Lists'
import Filter from './components/Filter'
import TodoProvider from './context/TodoProvider'
import FilterProvider from './context/FilterProvider'


function App() {

  return (
    <div className="container">
      <Header />
      <FilterProvider>
        <Filter />
        <TodoProvider>
           <Lists />
          <AddTodos  />
        </TodoProvider>
      </FilterProvider>
    </div>
  );
}

export default App;
