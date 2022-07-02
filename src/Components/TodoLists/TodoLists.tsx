import React from 'react';
import {fetchTodoLists} from '../../bll/thunk/todoLists-thunks';
import {useAppDispatch, useAppSelector} from '../../bll/store';
import {TodoList} from '../TodoList/TodoList';
import {Loader} from '../1_Common/Loader/Loader';

export const TodoLists = () => {
    const dispatch = useAppDispatch()

    const todoLists = useAppSelector(state => state.todoLists)
    const tasks = useAppSelector(state => state.tasks)

    const loadingStatus = useAppSelector(state => state.app.loadingStatus)


    React.useEffect(() => {
        dispatch(fetchTodoLists())
    }, [dispatch])

    if (loadingStatus === 'loading') return <Loader/>

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
