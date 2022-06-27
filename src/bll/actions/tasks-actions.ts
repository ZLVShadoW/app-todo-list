import {TaskType, UpdateDomainTaskModelType} from '../../types/types';

export const setTasks = (todolistId: string, tasks: TaskType[]) => ({
    type: 'tasks/SET_TASKS',
    payload: {todolistId, tasks}
} as const)

export const addTask = (task: TaskType) => ({
    type: 'tasks/ADD_TASK',
    payload: {task}
} as const)

export const removeTask = (
    todoListId: string, taskId: string) => ({
    type: 'tasks/REMOVE_TASK',
    payload: {todoListId, taskId}
} as const)

export const updateChangesTask = (
    todoListId: string, taskId: string,
    data: UpdateDomainTaskModelType
) => ({type: 'tasks/UPDATE_TASK', payload: {todoListId, taskId, data}} as const)