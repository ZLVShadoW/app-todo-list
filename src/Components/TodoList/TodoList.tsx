import React from 'react';

import styles from './TodoList.module.css'
import {useAppSelector} from '../../bll/store';
import {Task} from '../Task/Task';


type TodoListPropsType = {
    id: string
    title: string
}

export const TodoList: React.FC<TodoListPropsType> = ({id, title}) => {
    const tasks = useAppSelector(state => state.tasks)

    return (
        <div className={styles.todoList}>
            <h3>{title}</h3>
            <div>
                {
                    tasks[id].map(task => <Task key={task.id} title={task.title}/>)
                }
            </div>
        </div>
    );
};
