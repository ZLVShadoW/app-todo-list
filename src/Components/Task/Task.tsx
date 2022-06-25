import styles from './Task.module.css';

import React from 'react';
import {Button} from '../1_Common/Button/Button';


type TaskPropsType = {
    id: string
    title: string
    removeTask: (taskId: string) => void
}

export const Task: React.FC<TaskPropsType> = ({id, title, removeTask}) => {

    const editClick = () => {
        console.log('edit ', id)
    }

    const onDeleteTaskHandler = () => {
        removeTask(id)
    }
    return (
        <div className={styles.task}>
            <div><input type={'checkbox'}/></div>
            <div>{title}</div>
            <div className={styles.btnGroup}>
                <Button onClick={editClick}>edit</Button>
                <Button onClick={onDeleteTaskHandler}>delete</Button>
            </div>
        </div>
    );
};
