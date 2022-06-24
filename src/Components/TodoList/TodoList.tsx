import styles from './TodoList.module.css';

import React from 'react';
import {useAppDispatch} from '../../bll/store';
import {Task} from '../Task/Task';
import {createTask, fetchTasks} from '../../bll/thunk/tasks-thunks';
import {TaskType, TodoListType} from '../../types/types';
import {AddItemForm} from '../1_Common/AddItemForm/AddItemForm';


type TodoListPropsType = {
    todoList: TodoListType
    tasks: TaskType[]
}

export const TodoList: React.FC<TodoListPropsType> = ({todoList, tasks}) => {
    const dispatch = useAppDispatch()

    const addTask = (title: string) => {
        dispatch(createTask(todoList.id, title))
    }

    React.useEffect(() => {
        dispatch(fetchTasks(todoList.id))
    }, [])

    return (
        <div className={styles.todoList}>
            <h3>{todoList.title}</h3>
            <AddItemForm addItem={addTask}/>
            <div>
                {
                    tasks && tasks.map(task => <Task key={task.id}
                                                     id={task.id}
                                                     title={task.title}/>)
                }
            </div>
        </div>
    );
};
