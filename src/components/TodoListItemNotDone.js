const TodoListItemNotDone = props => {
    const clickHandler = () => {
        props.onItemClick({
            ...props.item,
            done: true
        });
    }

    return (
        <li onClick={clickHandler}
            className="todo-list-item">
            <div className="todo-list-item-div">
                <div className="todo-list-item-div-c todo-list-item-div-c1">{props.item.text}</div>
            </div>
        </li>
    )
}

export default TodoListItemNotDone;
