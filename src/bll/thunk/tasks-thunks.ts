import {AppThunkType} from '../types/types';
import {ResultCodeEnum, TodoListsAPI} from '../../api/api';
import {addTask, setTasks} from '../actions/tasks-actions';

export const fetchTasks = (todoListId: string): AppThunkType => async dispatch => {
    try {
        const res = await TodoListsAPI.getTasks(todoListId)
        dispatch(setTasks(todoListId, res.data.items))
    } catch (e: any) {

    }
}

export const createTask = (todoListId: string, title: string): AppThunkType => async dispatch => {
    try {
        const res = await TodoListsAPI.createTask(todoListId, title)
        if (res.data.resultCode === ResultCodeEnum.success) {
            dispatch(addTask(res.data.data.item))
        }
    } catch (e: any) {

    }
}