import React from 'react';
import {useAppSelector} from '../../bll/store';

export const TodoLists = () => {
    const todoLists = useAppSelector(state => state.todoLists)

    return (
        <>
            {
                todoLists.map(todoList => <div>{todoList.title}</div>)
            }
        </>
    );
};
