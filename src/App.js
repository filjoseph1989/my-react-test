import './App.css';
import TodoList from './components/TodoList.js';
import LargeButton from './components/LargeButton.js';
import {useState} from 'react';

const taskList = [
    {
        id: 1,
        text: 'Todo 1 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
        done: false
    },
    {
        id: 2,
        text: 'Todo 2 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        done: false
    },
    {
        id: 3,
        text: 'Todo 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        done: false
    }
];

function App() {
    const [items, setItems] = useState(taskList);

    const onItemClickHandler = (item) => {
        let itemsTemp = [...items];
        const newitems = itemsTemp.find(el => el.id === item.id);
        newitems.done = true;
        setItems(itemsTemp);
    }

    console.log(items);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Todo List</h1>
            </header>

            <ul>
                <TodoList
                    items={items}
                    onItemClick={onItemClickHandler} />
            </ul>

            <header className="App-header">
                <h1>Three Large Buttons</h1>
            </header>

            <LargeButton />
        </div>
    );
}

export default App;
