import styled from 'styled-components';

const AppHeaderBlock = styled.header`
  align-items: flex-end;
  display: flex;
  h1 {
    flex-grow: 1;
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;

const AppHeader = ({toDo, done}) => {
    return (
        <AppHeaderBlock>
            <h1>Todo List</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </AppHeaderBlock>
    )
}
export default AppHeader;