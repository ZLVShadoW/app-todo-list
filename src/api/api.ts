import axios from 'axios';
import {TaskType, TodoListType, UpdateTaskModelType} from '../types/types';

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
    updateTodoList(id: string, title: string) {
        return instance.put<CommonResponseType>(`todo-lists/${id}`, {title})
    },
    createTodoList(title: string) {
        return instance.post<CommonResponseType<{ item: TodoListType }>>(`todo-lists`, {title})
    },
    deleteTodoList(id: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${id}`)
    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponseType>(`todo-lists/${todolistId}/tasks`)
    },
    createTask(todoListId: string, title: string) {
        return instance.post<CommonResponseType<{ item: TaskType }>>(`todo-lists/${todoListId}/tasks`, {title})
    },
    deleteTask(todoListId: string, taskId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todoListId}/tasks/${taskId}`)
    },
    updateTask(todoListId: string, taskId: string, data: UpdateTaskModelType) {
        return instance.put<CommonResponseType<{ item: TaskType }>>(`todo-lists/${todoListId}/tasks/${taskId}`, data)
    }
}

export const AuthAPI = {
    me() {
        return instance.get<CommonResponseType<MeResponseType>>(`auth/me`)
    },
    login(data: LoginFormType) {
        return instance.post<CommonResponseType<{ userId: number }>>(`auth/login`, data)
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

type MeResponseType = {
    id: number
    email: string
    login: string
}

export type LoginFormType = {
    email: string
    password: string
    remember: boolean
}


