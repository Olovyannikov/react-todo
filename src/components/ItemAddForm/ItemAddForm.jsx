import {Button, FormControl} from "react-bootstrap";
import styled from "styled-components";

const AddItemBlock = styled.div`
  margin-top: 20px;
`;

const ItemAddForm = ({onItemAdded}) => {
    const inputStyle = {
        marginBottom: '10px'
    }

    return (
        <AddItemBlock>
            <FormControl
                style={inputStyle}
                type="text"
                placeholder={'placeholder'}/>
            <Button
                onClick={() => onItemAdded('Hello!')}
                variant={"outline-secondary"}>Add Item</Button>

        </AddItemBlock>
    )
}

export default ItemAddForm;