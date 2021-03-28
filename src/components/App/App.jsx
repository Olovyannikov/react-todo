import AppHeader from "../AppHeader/AppHeader";
import TodoList from "../TodoList/TodoList";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import styled from 'styled-components';

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

    return (
        <TodoAppBlock>
            <AppHeader toDo={1} done={3}/>
            <TopPanel>
                <SearchPanel placeholder={placeholder}/>
                <ItemStatusFilter/>
            </TopPanel>
            <TodoList items={items}/>
        </TodoAppBlock>
    );

}

export default App;