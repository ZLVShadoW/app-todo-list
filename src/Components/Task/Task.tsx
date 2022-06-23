import styles from './Task.module.css';

import React from 'react';
import {Button} from '../1_Common/Button/Button';


type TaskPropsType = {
    id: string
    title: string
}

export const Task: React.FC<TaskPropsType> = ({id, title}) => {

    const editClick = () => {
        console.log('edit ', id)
    }

    const deleteClick = () => {
        console.log('delete ', id)
    }
    return (
        <div className={styles.task}>
            <div><input type={'checkbox'}/></div>
            <div>{title}</div>
            <div className={styles.btnGroup}>
                <Button onClick={editClick}>edit</Button>
                <Button onClick={deleteClick}>delete</Button>
            </div>
        </div>
    );
};
