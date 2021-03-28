import {useState} from "react";
import {Button, ButtonGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamation, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import s from './TodoListItem.module.scss';

const TodoListItem = ({label, important = false}) => {

    const [done, setDone] = useState(false);

    const liStyle = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    }
    return (
        <span
            className={s.todoListItem}>
            <span
                onClick={() => setDone(done!==true)}
                className={done === true ? `${s.todoListItem} done` : `${s.todoListItem}`}
                style={liStyle}>
                {label}
            </span>
            <ButtonGroup>
                <Button
                    type={'button'}
                    variant={'outline-danger'}
                    size={'sm'}
                >
                    <FontAwesomeIcon icon={faTrashAlt}/>
                </Button>
                <Button
                    type={'button'}
                    variant={"outline-success"}
                    size={'sm'}
                >
                    <FontAwesomeIcon icon={faExclamation}/>
                </Button>
            </ButtonGroup>
        </span>
    )
}

export default TodoListItem;

