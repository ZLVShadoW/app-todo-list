import React from 'react';
import {AddItemForm} from '../Components/1_Common/AddItemForm/AddItemForm';
import {TodoLists} from '../Components/TodoLists/TodoLists';
import {createTodoList} from '../bll/thunk/todoLists-thunks';
import {useAppDispatch} from '../bll/store';

export const TodoListsPage = () => {
    const dispatch = useAppDispatch()

    const addTodoList = (title: string) => {
        dispatch(createTodoList(title))
    }

    return (
        <>
            <AddItemForm addItem={addTodoList}/>
            <TodoLists/>
        </>
    );
};
