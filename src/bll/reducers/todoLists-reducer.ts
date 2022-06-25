import {TodoListInitStateType, TodoListsReducerActionsType} from '../types/todoLists-type'

const todoListsInitState: TodoListInitStateType = []

export const todoListsReducer = (
    state: TodoListInitStateType = todoListsInitState,
    action: TodoListsReducerActionsType
): TodoListInitStateType => {
    switch (action.type) {
        case 'todoLists/SET_TODO_LISTS':
            return action.payload.todoLists
        case 'todoLists/ADD_TODO_LIST':
            return [action.payload.todoList, ...state]
        case 'todoLists/REMOVE_TODO_LIST':
            return state.filter(el => el.id !== action.payload.id)
        default:
            return state
    }
}
