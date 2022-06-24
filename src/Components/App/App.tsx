import React from 'react';
import './App.css';
import {TodoLists} from '../TodoLists/TodoLists';
import {useAppDispatch} from '../../bll/store';
import {AddItemForm} from '../1_Common/AddItemForm/AddItemForm';
import {createTodoList} from '../../bll/thunk/todoLists-thunks';

function App() {
    const dispatch = useAppDispatch()

    const addTodoList = (title: string) => {
        dispatch(createTodoList(title))
    }

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 30,
            maxWidth: 1850,
            margin: '0 auto'
        }}>
            <AddItemForm addItem={addTodoList}/>
            <TodoLists/>
        </div>
    );
}

export default App;
