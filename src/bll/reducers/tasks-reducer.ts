import {TaskType} from '../../types/types';
import {AppThunkType} from '../store';
import {TodoListsAPI} from '../../api/api';

const tasksInitState: TasksInitStateType = {}

export const tasksReducer = (
    state: TasksInitStateType = tasksInitState,
    action: TasksReducerActionsType
): TasksInitStateType => {
    switch (action.type) {
        case 'tasks/SET_TASKS':
            return {
                ...state,
                [action.payload.todolistId]: action.payload.tasks
            }
        default:
            return state
    }
}


// action

const setTasks = (todolistId: string, tasks: TaskType[]) => ({
    type: 'tasks/SET_TASKS',
    payload: {todolistId, tasks}
} as const)


// thunk

export const fetchTasks = (todoListId: string): AppThunkType => async dispatch => {
    try {
        const res = await TodoListsAPI.getTasks(todoListId)
        dispatch(setTasks(todoListId, res.data.items))
    } catch (e: any) {

    }
}


// type

type TasksReducerActionsType = ReturnType<typeof setTasks>

type TasksInitStateType = {
    [key: string]: TaskType[]
}