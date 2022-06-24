import {TaskType} from '../../types/types';
import {addTask, setTasks} from '../actions/tasks-actions';
import {AddTodoList} from './todoLists-type';

export type TasksReducerActionsType = ReturnType<typeof setTasks>
    | AddTodoList
    | ReturnType<typeof addTask>

export type TasksInitStateType = {
    [key: string]: TaskType[]
}