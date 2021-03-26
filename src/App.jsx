import AppHeader from "./components/AppHeader";
import TodoList from "./components/TodoList";
import SearchPanel from "./components/SearchPanel";


const App = ({items, placeholder}) => {

  return (
    <>
      <AppHeader/>
      <SearchPanel placeholder={placeholder}/>
      <TodoList items={items}/>
    </>
  );

}

export default App;