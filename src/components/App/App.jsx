import AppHeader from "../AppHeader/AppHeader";
import TodoList from "../TodoList/TodoList";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import styled from 'styled-components';
import {useState} from "react";
import ItemAddForm from "../ItemAddForm/ItemAddForm";

const TodoAppBlock = styled.section`
  margin: 2rem auto 0 auto;
  max-width: 400px;
`;

const TopPanel = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
`;

const App = ({items, placeholder}) => {

    const [list, updateList] = useState(items);

    const handleRemoveItem = id => {
        updateList(list => list.filter(item => item.id !== id));
    };

    const handleAddItem = text => {
        const newItem  = {
            label: text,
            important: false,
            id: Math.floor(Math.random() * 10)
        };

        updateList(list => [...list, newItem])

    };

    return (
        <TodoAppBlock>
            <AppHeader toDo={1} done={3}/>
            <TopPanel>
                <SearchPanel placeholder={placeholder}/>
                <ItemStatusFilter/>
            </TopPanel>
            <TodoList
                onDeleted={handleRemoveItem}
                items={list}
            />

            <ItemAddForm onItemAdded={handleAddItem}/>
        </TodoAppBlock>
    );

}

export default App;