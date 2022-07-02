import {AppThunkType} from '../types/types';
import {ResultCodeEnum, TodoListsAPI} from '../../api/api';
import {
    addTodoList,
    changeTodoList,
    removeTodoList,
    setTodoLists
} from '../actions/todoLists-actions';
import {setLoadingStatus} from '../actions/add-actions';

export const fetchTodoLists = (): AppThunkType => async dispatch => {
    try {
        dispatch(setLoadingStatus('loading'))
        const res = await TodoListsAPI.getTodoLists()
        dispatch(setTodoLists(res.data))
        dispatch(setLoadingStatus('idle'))
    } catch (e: any) {
        console.log(e)
    } finally {
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

export const updateTodoList = (
    id: string, title: string): AppThunkType => async dispatch => {
    try {
        const res = await TodoListsAPI.updateTodoList(id, title)
        if (res.data.resultCode === ResultCodeEnum.success) {
            dispatch(changeTodoList(id, title))
        }
    } catch (e) {

    }
}

export const deleteTodoList = (id: string): AppThunkType => async dispatch => {
    try {
        const res = await TodoListsAPI.deleteTodoList(id)
        if (res.data.resultCode === ResultCodeEnum.success) {
            dispatch(removeTodoList(id))
        }
    } catch (e: any) {

    }
}