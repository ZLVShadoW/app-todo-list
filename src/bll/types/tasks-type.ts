import {TaskType} from '../../types/types';
import { setTasks } from '../actions/tasks-actions';
import {AddTodoList} from './todoLists-type';

export type TasksReducerActionsType = ReturnType<typeof setTasks>
| AddTodoList

export type TasksInitStateType = {
    [key: string]: TaskType[]
}