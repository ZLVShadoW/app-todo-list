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
                [action.payload.task.todoListId]: [action.payload.task, ...state[action.payload.task.todoListId]]
            }
        case 'todoLists/ADD_TODO_LIST':
            return {
                ...state,
                [action.payload.todoList.id]: []
            }
        default:
            return state
    }
}
