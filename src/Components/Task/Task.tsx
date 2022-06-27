import styles from './Task.module.css';

import React from 'react';
import {Button} from '../1_Common/Button/Button';
import {TaskStatuses} from '../../types/types';
import {EditableTitle} from '../1_Common/EditableTitle/EditableTitle';


type TaskPropsType = {
    id: string
    title: string
    status: TaskStatuses
    removeTask: (taskId: string) => void
    changeTaskStatus: (id: string, status: TaskStatuses) => void
    changeTaskTitle: (id: string, newTitle: string) => void
}

export const Task: React.FC<TaskPropsType> = ({
    id,
    title,
    status,
    removeTask,
    changeTaskStatus,
    changeTaskTitle
}) => {

    const onDeleteTaskHandler = () => {
        removeTask(id)
    }

    const onChangeTaskTitle = (title: string) => {
        changeTaskTitle(id, title)
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
            <div className={styles.taskTitle}>
                <EditableTitle title={title}
                               onChangeTitle={onChangeTaskTitle}/>
            </div>
            <div className={styles.btnGroup}>
                <Button onClick={onDeleteTaskHandler}>delete</Button>
            </div>
        </div>
    );
};
