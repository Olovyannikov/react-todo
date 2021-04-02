import React from 'react';
import ReactDOM from 'react-dom';
import App, {createTodoItem} from './components/App/App';
import './index.scss';

const state = {
    todo:
        [
            createTodoItem('Drink coffee'),
            createTodoItem('Make awesome app'),
            createTodoItem('Have a lunch')
        ],
    placeholder: 'Type here...'
};

ReactDOM.render(
    <React.StrictMode>
        <App
            items={state.todo}
            placeholder={state.placeholder}
        />
    </React.StrictMode>,
    document.getElementById('root')
);