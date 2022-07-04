import {TasksInitStateType, TasksReducerActionsType} from '../types/tasks-type';

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
        case 'tasks/ADD_TASK':
            return {
                ...state,
                [action.payload.task.todoListId]: [action.payload.task,
                    ...state[action.payload.task.todoListId]]
            }
        case 'tasks/REMOVE_TASK':
            return {
                ...state,
                [action.payload.todoListId]: state[action.payload.todoListId]
                    .filter(el => el.id !== action.payload.taskId)
            }
        case 'todoLists/ADD_TODO_LIST':
            return {
                ...state,
                [action.payload.todoList.id]: []
            }
        case 'todoLists/REMOVE_TODO_LIST':
            const copyState = {...state}
            delete copyState[action.payload.id]
            return copyState
        case 'tasks/UPDATE_TASK':
            return {
                ...state,
                [action.payload.todoListId]: state[action.payload.todoListId]
                    .map(el => el.id === action.payload.taskId
                        ? {...el, ...action.payload.data} : el)
            }
        case 'todoLists/CLEAR-DATA':
            return {}
        default:
            return state
    }
}
