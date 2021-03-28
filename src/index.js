import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.scss';

const state = {
    todo:
        [
            {label: 'Learn React', important: false, id: 1},
            {label: 'Build Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
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