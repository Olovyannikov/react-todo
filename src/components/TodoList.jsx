import TodoListItem from "./TodoListItem";

const TodoList = ({items}) => {
    return (
        <ul>
            <TodoListItem items={items}/>
        </ul>
    );
}

export default TodoList;