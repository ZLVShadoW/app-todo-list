import axios from 'axios';
import {TaskType, TodoListType} from '../types/types';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '7f6bcac5-aaf8-4abf-bee5-b24d79b89827'
    }
})

export const TodoListsAPI = {
    getTodoLists() {
        return instance.get<TodoListType[]>(`todo-lists`)
    },
    createTodoList(title: string) {
        return instance.post<CommonResponseType<{ item: TodoListType }>>(`todo-lists`, {title})
    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponseType>(`todo-lists/${todolistId}/tasks`)
    },
    createTask(todoListId: string, title: string) {
        return instance.post<CommonResponseType<{ item: TaskType }>>(`todo-lists/${todoListId}/tasks`, {title})
    },
    deleteTask(todoListId: string, taskId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todoListId}/tasks/${taskId}`)
    }
}


// type

export enum ResultCodeEnum {
    success = 0,
    failed = 1,
    captcha = 10
}

type CommonResponseType<D = {}> = {
    resultCode: ResultCodeEnum
    messages: string[]
    fieldsErrors: string[]
    data: D
}

type GetTasksResponseType = {
    items: TaskType[]
    totalCount: number
    error: string | null
}

