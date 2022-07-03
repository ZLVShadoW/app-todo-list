import React from 'react';
import {AddItemForm} from '../Components/1_Common/AddItemForm/AddItemForm';
import {TodoLists} from '../Components/TodoLists/TodoLists';
import {createTodoList} from '../bll/thunk/todoLists-thunks';
import {useAppDispatch, useAppSelector} from '../bll/store';
import { Navigate } from 'react-router-dom';

export const TodoListsPage = () => {
    const dispatch = useAppDispatch()

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    const addTodoList = (title: string) => {
        dispatch(createTodoList(title))
    }

    if (!isLoggedIn) return <Navigate to={'/login'} />

    return (
        <>
            <AddItemForm addItem={addTodoList}/>
            <TodoLists/>
        </>
    );
};
