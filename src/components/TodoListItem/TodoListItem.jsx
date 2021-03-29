import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, ButtonGroup} from "react-bootstrap";
import {faExclamation, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import s from './TodoListItem.module.scss';

const TodoListItem = ({label, onDeleted}) => {

    const [done, setDone] = useState(false);
    const [important, setImportant] = useState(false);

    let classNames = `${s.todoListItem}`;

    if (done) {
        classNames += ' done';
    }

    if (important) {
        classNames += ' important';
    }

    return (

        <span
            className={s.todoListItem}>
            <span
                onClick={() => setDone((done) => !done)}
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
                    onClick={() => setImportant((important) => !important)}
                >
                    <FontAwesomeIcon icon={faExclamation}/>
                </Button>
            </ButtonGroup>
        </span>
    )
}

export default TodoListItem;

