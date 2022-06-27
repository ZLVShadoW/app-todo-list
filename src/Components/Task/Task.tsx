import styles from './Task.module.css';

import React from 'react';
import {Button} from '../1_Common/Button/Button';
import {TaskStatuses} from '../../types/types';


type TaskPropsType = {
    id: string
    title: string
    status: TaskStatuses
    removeTask: (taskId: string) => void
    changeTaskStatus: (id: string, status: TaskStatuses) => void
}

export const Task: React.FC<TaskPropsType> = ({
    id,
    title,
    status,
    removeTask,
    changeTaskStatus
}) => {

    const editClick = () => {
        console.log('edit ', id)
    }

    const onDeleteTaskHandler = () => {
        removeTask(id)
    }

    const onChangeTaskStatusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.checked
        changeTaskStatus(id, value ? TaskStatuses.Completed : TaskStatuses.New)
    }

    return (
        <div className={styles.task}>
            <div>
                <input checked={status === TaskStatuses.Completed}
                       onChange={onChangeTaskStatusHandler} type={'checkbox'}/>
            </div>
            <div>{title}</div>
            <div className={styles.btnGroup}>
                <Button onClick={editClick}>edit</Button>
                <Button onClick={onDeleteTaskHandler}>delete</Button>
            </div>
        </div>
    );
};
