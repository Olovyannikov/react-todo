import {useState} from "react";
import AppHeader from "../AppHeader/AppHeader";
import TodoList from "../TodoList/TodoList";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import ItemAddForm from "../ItemAddForm/ItemAddForm";
import styled from 'styled-components';

const TodoAppBlock = styled.section`
  margin: 2rem auto 0 auto;
  max-width: 800px;
`;

const TopPanel = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
`;

export const createTodoItem = (label) => {
    return {
        label,
        important: false,
        done: false,
        id: Math.floor(Math.random() * 100)
    };
};

const App = ({items, placeholder}) => {

    const [list, updateList] = useState(items);
    const [count, setCount] = useState(items.length);
    const [done, setDoneCount] = useState(items.filter(el => el.done).length);

    const handleRemoveItem = id => {
        setCount(count - 1)
        updateList(list => list.filter(item => item.id !== id));
    };

    const handleAddItem = text => {
        setCount(count + 1)
        const newItem  = createTodoItem(text);
        updateList(list => [...list, newItem])
    };

    const handleSelected = () => {
        if (items.filter(el => el.done)) {
            setDoneCount(done + 1)
        } else {
            setDoneCount(done - 1)
        }

    }



    return (
        <TodoAppBlock>
            <AppHeader items={items} toDo={count - done} done={done}/>
            <TopPanel>
                <SearchPanel placeholder={placeholder}/>
                <ItemStatusFilter/>
            </TopPanel>
            <TodoList
                onDeleted={handleRemoveItem}
                items={list}
                onItemSelect={handleSelected}
            />

            <ItemAddForm onItemAdded={handleAddItem}/>
        </TodoAppBlock>
    );
}

export default App;