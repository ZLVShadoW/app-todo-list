import axios from 'axios';
import {TaskType, TodoListType} from '../types/types';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true
})

export const TodoListsAPI = {
    getTodoLists() {
        return instance.get<TodoListType[]>(`todo-lists`)
    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponseType>(`todo-lists/${todolistId}/tasks`)
    }
}


type GetTasksResponseType = {
    items: TaskType[]
    totalCount: number
    error: string | null
}
