import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, ButtonGroup} from "react-bootstrap";
import {faExclamation, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import s from './TodoListItem.module.scss';

const TodoListItem = ({label, onDeleted, onItemSelect, items}) => {

    let classNames = `${s.todoListItem}`;

    const [done, setDone] = useState(false);
    const [important, setImportant] = useState(false);

    if (done) {
        classNames += ' done';
    }

    if (important) {
        classNames += ' important';
    }


    const toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex(el => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName] : !oldItem[propName]}

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }

    const onToggleImportant = () => {
        setImportant(!important)
    };

    const onToggleDone = (id) => {
        setDone(!done)
    }

    return (
        <span
            className={s.todoListItem}>
            <span
                onClick={onToggleDone}
                className={classNames}
            >
                {label}
            </span>
            <ButtonGroup>
                <Button
                    type={'button'}
                    variant={'outline-danger'}
                    size={'sm'}
                    onClick={onDeleted}
                >
                    <FontAwesomeIcon icon={faTrashAlt}/>
                </Button>
                <Button
                    type={'button'}
                    variant={"outline-success"}
                    size={'sm'}
                    onClick={onToggleImportant}
                >
                    <FontAwesomeIcon icon={faExclamation}/>
                </Button>
            </ButtonGroup>
        </span>
    )
}

export default TodoListItem;

