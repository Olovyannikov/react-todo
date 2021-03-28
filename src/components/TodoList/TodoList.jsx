import TodoListItem from "../TodoListItem/TodoListItem";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import s from './TodoList.module.scss';

const TodoList = ({items}) => {

    const elements = items.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <ListGroupItem as={'li'} key={id}>
                <TodoListItem {...itemProps} />
            </ListGroupItem>
        )
    });

    return (
        <ListGroup as={"ul"} className={s.todoList}>
            {elements}
        </ListGroup>
    );
}

export default TodoList;