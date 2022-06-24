import {TaskType} from '../../types/types';

export const setTasks = (todolistId: string, tasks: TaskType[]) => ({
    type: 'tasks/SET_TASKS',
    payload: {todolistId, tasks}
} as const)