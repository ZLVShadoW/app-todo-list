import styles from './TodoListHeader.module.css';

import React from 'react';
import {Button} from '../1_Common/Button/Button';
import {useAppDispatch} from '../../bll/store';
import {deleteTodoList, updateTodoList} from '../../bll/thunk/todoLists-thunks';
import {EditableTitle} from '../1_Common/EditableTitle/EditableTitle';


type TodoListHeaderPropsType = {
    id: string
    title: string
}

export const TodoListHeader: React.FC<TodoListHeaderPropsType> = ({id, title}) => {
    const dispatch = useAppDispatch()

    const onDeleteHandler = () => {
        dispatch(deleteTodoList(id))
    }

    const changeTodoListTitle = (newTitle: string) => {
        dispatch(updateTodoList(id, newTitle))
    }

    return (
        <div className={styles.header}>
            <h3 className={styles.title}>
                <EditableTitle title={title}
                               onChangeTitle={changeTodoListTitle}/>
            </h3>

            <div className={styles.btnGroup}>
                <Button onClick={onDeleteHandler}>Delete</Button>
            </div>
        </div>
    );
};
