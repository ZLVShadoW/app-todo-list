import {TaskType} from '../../types/types';
import {addTask, removeTask, setTasks} from '../actions/tasks-actions';
import {AddTodoList, RemoveTodoList} from './todoLists-type';

export type TasksReducerActionsType = ReturnType<typeof setTasks>
    | ReturnType<typeof addTask>
    | ReturnType<typeof removeTask>
    | AddTodoList
    | RemoveTodoList

export type TasksInitStateType = {
    [key: string]: TaskType[]
}