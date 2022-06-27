import styles from './TodoList.module.css';

import React from 'react';
import {useAppDispatch} from '../../bll/store';
import {Task} from '../Task/Task';
import {
    createTask,
    deleteTask,
    fetchTasks,
    updateTask
} from '../../bll/thunk/tasks-thunks';
import {TaskStatuses, TaskType, TodoListType} from '../../types/types';
import {AddItemForm} from '../1_Common/AddItemForm/AddItemForm';
import {TodoListHeader} from '../TodoListHeader/TodoListHeader';


type TodoListPropsType = {
    todoList: TodoListType
    tasks: TaskType[]
}

export const TodoList: React.FC<TodoListPropsType> = ({todoList, tasks}) => {
    const dispatch = useAppDispatch()

    const addTask = (title: string) => {
        dispatch(createTask(todoList.id, title))
    }

    const removeTask = (taskId: string) => {
        dispatch(deleteTask(todoList.id, taskId))
    }

    const changeTaskStatus = (taskId: string, status: TaskStatuses) => {
        dispatch(updateTask(todoList.id, taskId, {status}))
    }

    const changeTaskTitle = (taskId: string, title: string) => {
        dispatch(updateTask(todoList.id, taskId, {title}))
    }

    React.useEffect(() => {
        dispatch(fetchTasks(todoList.id))
    }, [])

    return (
        <div className={styles.todoList}>
            <TodoListHeader title={todoList.title}
                            id={todoList.id}/>
            <AddItemForm addItem={addTask}/>
            <div>
                {
                    tasks && tasks.map(task => <Task key={task.id}
                                                     id={task.id}
                                                     title={task.title}
                                                     status={task.status}
                                                     removeTask={removeTask}
                                                     changeTaskStatus={changeTaskStatus}
                                                     changeTaskTitle={changeTaskTitle}/>)
                }
            </div>
        </div>
    );
};
