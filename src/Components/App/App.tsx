import styles from './App.module.css';

import React from 'react';
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
        <div className={styles.container}>
            <AddItemForm addItem={addTodoList}/>
            <TodoLists/>
        </div>
    );
}

export default App;
