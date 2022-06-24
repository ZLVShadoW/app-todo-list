import { AppThunkType } from '../types/types';
import {TodoListsAPI} from '../../api/api';
import { setTasks } from '../actions/tasks-actions';

export const fetchTasks = (todoListId: string): AppThunkType => async dispatch => {
    try {
        const res = await TodoListsAPI.getTasks(todoListId)
        dispatch(setTasks(todoListId, res.data.items))
    } catch (e: any) {

    }
}