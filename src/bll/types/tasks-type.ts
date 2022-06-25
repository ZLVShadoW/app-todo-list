import {TaskType} from '../../types/types';
import {addTask, removeTask, setTasks} from '../actions/tasks-actions';
import {AddTodoList} from './todoLists-type';

export type TasksReducerActionsType = ReturnType<typeof setTasks>
    | AddTodoList
    | ReturnType<typeof addTask>
    | ReturnType<typeof removeTask>

export type TasksInitStateType = {
    [key: string]: TaskType[]
}