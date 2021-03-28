import {Button, ButtonGroup} from "react-bootstrap";
import {useState} from "react";

const ItemStatusFilter = () => {

    const [state, setState] = useState('outline-secondary');

    return (
        <ButtonGroup>
            <Button
                type={"button"}
                variant={"info"}>All</Button>
            <Button
                type={"button"}
                variant={"outline-secondary"}>Active</Button>
            <Button
                type={"button"}
                variant={"outline-secondary"}>Done</Button>
        </ButtonGroup>
    )
}

export default ItemStatusFilter;