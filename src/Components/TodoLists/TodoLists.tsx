import React from 'react';
import {useAppSelector} from '../../bll/store';
import {TodoList} from '../TodoList/TodoList';

export const TodoLists = () => {
    const todoLists = useAppSelector(state => state.todoLists)

    return (
        <>
            {
                todoLists.map(todoList => <div style={{width: '22%'}} key={todoList.id}>
                    <TodoList
                        id={todoList.id}
                    title={todoList.title}/>
                </div>)
            }
        </>
    );
};
