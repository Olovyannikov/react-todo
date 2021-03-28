import {FormControl} from "react-bootstrap";

const SearchPanel = ({placeholder}) => {
    const searchStyle = {
        width: 'auto',
        flexGrow: 1,
        marginRight: '3px'
    }
    return (
        <FormControl
            style={searchStyle}
            type="text"
            placeholder={placeholder}/>
    )
}

export default SearchPanel;