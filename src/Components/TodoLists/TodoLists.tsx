import React from 'react';
import {fetchTodoLists} from '../../bll/thunk/todoLists-thunks';
import {useAppDispatch, useAppSelector} from '../../bll/store';
import {TodoList} from '../TodoList/TodoList';

export const TodoLists = () => {
    const dispatch = useAppDispatch()

    const todoLists = useAppSelector(state => state.todoLists)
    const tasks = useAppSelector(state => state.tasks)

    React.useEffect(() => {
        dispatch(fetchTodoLists())
    }, [dispatch])

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
