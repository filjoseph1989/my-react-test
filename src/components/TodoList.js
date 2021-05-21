import TodoListItemNotDone from './TodoListItemNotDone.js';

const TodoList = props => {
    return props.items.map((item) => {
        if (item.done === false) {
            return <TodoListItemNotDone
                key={item.id}
                item={item}
                onItemClick={props.onItemClick} />
        } else {
            return '';
        }         
    });
}

export default TodoList;
