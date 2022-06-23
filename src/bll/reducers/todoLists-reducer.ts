import {TodoListType} from '../../types/types';
import {AppThunkType} from '../store';
import {TodoListsAPI} from '../../api/api';

const todoListsInitState: TodoListInitStateType = []

export const todoListsReducer = (
    state: TodoListInitStateType = todoListsInitState,
    action: TodoListsReducerActionsType
): TodoListInitStateType => {
    switch (action.type) {
        case 'todoLists/SET_TODO_LISTS':
            return [...action.payload.todoLists, ...state]
        default:
            return state
    }
}


// action

const setTodoLists = (todoLists: TodoListType[]) => ({
    type: 'todoLists/SET_TODO_LISTS',
    payload: {todoLists}
} as const)


// thunk

export const fetchTodoLists = (): AppThunkType => async dispatch => {
    try {
        const res = await TodoListsAPI.getTodoLists()
        dispatch(setTodoLists(res.data))
    } catch (e: any) {
        console.log(e)
    }
}

// type

type TodoListInitStateType = TodoListType[]

type TodoListsReducerActionsType = ReturnType<typeof setTodoLists>