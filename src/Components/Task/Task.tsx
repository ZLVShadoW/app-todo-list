import styles from './Task.module.css';

import React from 'react';


type TaskPropsType = {
    title: string
}

export const Task: React.FC<TaskPropsType> = ({title}) => {
    return (
        <div className={styles.task}>
            <div><input type={'checkbox'}/></div>
            <div>{title}</div>
            <div className={styles.btnGroup}>
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
    );
};
