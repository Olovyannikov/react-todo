import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const state = {
    todo: ['Learn React', 'Build Awesome App'],
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