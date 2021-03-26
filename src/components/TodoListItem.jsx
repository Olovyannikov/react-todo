const ListItem = ({items}) => items.map(i => <li key={i.length}>{i}</li>)

export default ListItem;

