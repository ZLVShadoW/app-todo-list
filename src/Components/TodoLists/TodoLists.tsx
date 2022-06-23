import React from 'react';
import {fetchTodoLists} from '../../bll/reducers/todoLists-reducer';
import {useAppDispatch, useAppSelector} from '../../bll/store';
import {TodoList} from '../TodoList/TodoList';

export const TodoLists = () => {
    const dispatch = useAppDispatch()

    const todoLists = useAppSelector(state => state.todoLists)
    const tasks = useAppSelector(state => state.tasks)

    React.useEffect(() => {
        dispatch(fetchTodoLists())
    }, [])

    return (
        <>
            {
                todoLists.map(todoList => <div style={{width: '22%'}} key={todoList.id}>
                    <TodoList
                        todoList={todoList}
                        tasks={tasks[todoList.id]}/>
                </div>)
            }
        </>
    );
};
