import {AppDispatchThunkActionType, AppRootStateType, AppThunkType} from '../types/types';
import {ResultCodeEnum, TodoListsAPI} from '../../api/api';
import {addTask, removeTask, setTasks, updateChangesTask} from '../actions/tasks-actions';
import {UpdateDomainTaskModelType, UpdateTaskModelType} from '../../types/types';

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

export const deleteTask = (todoListId: string, taskId: string): AppThunkType => async dispatch => {
    try {
        const res = await TodoListsAPI.deleteTask(todoListId, taskId)
        if (res.data.resultCode === ResultCodeEnum.success) {
            dispatch(removeTask(todoListId, taskId))
        }
    } catch (e: any) {

    }
}

export const updateTask = (todoListId: string, taskId: string, data: UpdateDomainTaskModelType): AppThunkType => async (dispatch: AppDispatchThunkActionType, getState: () => AppRootStateType) =>  {
    const task = getState().tasks[todoListId].find(el => el.id === taskId)
    if (!task) {
        console.warn('such task not found in the state')
        return
    }

    const model: UpdateTaskModelType = {
        title: task.title,
        description: task.description,
        status: task.status,
        priority: task.priority,
        startDate: task.startDate,
        deadline: task.deadline,
        ...data
    }
    try {
        const res = await TodoListsAPI.updateTask(todoListId, taskId, model)
        if (res.data.resultCode === ResultCodeEnum.success) {
            dispatch(updateChangesTask(todoListId, taskId, data))
        }
    } catch (e: any) {

    }
}