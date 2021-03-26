const SearchPanel = ({placeholder}) => {
    const searchStyle = {
        fontSize: '20px',
    }
    return (
        <input
            style={searchStyle}
            type="text" placeholder={placeholder}/>
    )
}

export default SearchPanel;