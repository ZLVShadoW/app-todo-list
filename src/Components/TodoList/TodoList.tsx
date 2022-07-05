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
import {
    FilterStatusesType,
    TaskStatuses,
    TaskType,
    TodoListDomainType,
} from '../../types/types';
import {AddItemForm} from '../1_Common/AddItemForm/AddItemForm';
import {TodoListHeader} from '../TodoListHeader/TodoListHeader';
import {Button} from '../1_Common/Button/Button';
import {changeFilter} from '../../bll/actions/todoLists-actions';


type TodoListPropsType = {
    todoList: TodoListDomainType
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

    const changeFilterHandler = (filter: FilterStatusesType) => {
        dispatch(changeFilter(todoList.id, filter))
    }

    const filteredTasks = filterTasks(tasks, todoList.filter)

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
                    tasks && filteredTasks.map(task => <Task key={task.id}
                                                             id={task.id}
                                                             title={task.title}
                                                             status={task.status}
                                                             removeTask={removeTask}
                                                             changeTaskStatus={changeTaskStatus}
                                                             changeTaskTitle={changeTaskTitle}/>)
                }
            </div>

            <div className={styles.btnGroup}>
                <Button onClick={() => changeFilterHandler('ALL')}
                        active={todoList.filter === 'ALL'}>All</Button>
                <Button onClick={() => changeFilterHandler('ACTIVE')}
                        active={todoList.filter === 'ACTIVE'}>Active</Button>
                <Button
                    onClick={() => changeFilterHandler('COMPLETED')}
                    active={todoList.filter === 'COMPLETED'}>Completed</Button>
            </div>
        </div>
    );
};

const filterTasks = (tasks: TaskType[], filter: FilterStatusesType) => {
    if (filter === 'COMPLETED') {
        return tasks.filter(el => el.status === TaskStatuses.Completed)
    }
    if (filter === 'ACTIVE') {
        return tasks.filter(el => el.status === TaskStatuses.New)
    }
    return tasks
}