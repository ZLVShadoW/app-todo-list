import {AppThunkType} from '../types/types';
import {ResultCodeEnum, TodoListsAPI} from '../../api/api';
import {
    addTodoList,
    changeTodoList,
    removeTodoList,
    setTodoLists
} from '../actions/todoLists-actions';
import {setAppError, setLoadingStatus} from '../actions/app-actions';

export const fetchTodoLists = (): AppThunkType => async dispatch => {
    try {
        dispatch(setLoadingStatus('loading'))
        const res = await TodoListsAPI.getTodoLists()
        dispatch(setTodoLists(res.data))
    } catch (e: any) {
        console.log(e)
    } finally {
        dispatch(setLoadingStatus('idle'))
    }
}

export const createTodoList = (title: string): AppThunkType => async dispatch => {
    try {
        dispatch(setLoadingStatus('loading'))
        const res = await TodoListsAPI.createTodoList(title)
        if (res.data.resultCode === ResultCodeEnum.success) {
            dispatch(addTodoList(res.data.data.item))
        } else {
            dispatch(setAppError(res.data.messages[0]))
        }
    } catch (e: any) {
        dispatch(setAppError(e.message ? e.message : 'Some error occurred'))
    } finally {
        dispatch(setLoadingStatus('idle'))
    }
}

export const updateTodoList = (
    id: string, title: string): AppThunkType => async dispatch => {
    try {
        dispatch(setLoadingStatus('loading'))
        const res = await TodoListsAPI.updateTodoList(id, title)
        if (res.data.resultCode === ResultCodeEnum.success) {
            dispatch(changeTodoList(id, title))
        } else {
            dispatch(setAppError(res.data.messages[0]))
        }
    } catch (e: any) {
        dispatch(setAppError(e.message ? e.message : 'Some error occurred'))
    } finally {
        dispatch(setLoadingStatus('idle'))
    }
}

export const deleteTodoList = (id: string): AppThunkType => async dispatch => {
    try {
        dispatch(setLoadingStatus('loading'))
        const res = await TodoListsAPI.deleteTodoList(id)
        if (res.data.resultCode === ResultCodeEnum.success) {
            dispatch(removeTodoList(id))
        }
    } catch (e: any) {
        dispatch(setAppError(e.message ? e.message : 'Some error occurred'))
    } finally {
        dispatch(setLoadingStatus('idle'))
    }
}