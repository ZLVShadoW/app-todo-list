import React from 'react';
import './App.css';
import {TodoLists} from '../TodoLists/TodoLists';

function App() {

    return (
        <div style={{display: 'flex', gap: 30}}>
            <TodoLists/>
        </div>
    );
}

export default App;
