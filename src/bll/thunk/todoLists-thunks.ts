import {AppThunkType} from '../types/types';
import {ResultCodeEnum, TodoListsAPI} from '../../api/api';
import {addTodoList, setTodoLists} from '../actions/todoLists-actions';

export const fetchTodoLists = (): AppThunkType => async dispatch => {
    try {
        const res = await TodoListsAPI.getTodoLists()
        dispatch(setTodoLists(res.data))
    } catch (e: any) {
        console.log(e)
    }
}

export const createTodoList = (title: string): AppThunkType => async dispatch => {
    try {
        const res = await TodoListsAPI.createTodoList(title)
        if (res.data.resultCode === ResultCodeEnum.success) {
            dispatch(addTodoList(res.data.data.item))
        }
    } catch (e: any) {

    }
}