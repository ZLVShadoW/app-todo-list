import {TodoListType} from '../../types/types';

export const setTodoLists = (todoLists: TodoListType[]) => ({
    type: 'todoLists/SET_TODO_LISTS',
    payload: {todoLists}
} as const)

export const addTodoList = (todoList: TodoListType) => ({
    type: 'todoLists/ADD_TODO_LIST',
    payload: {todoList}
} as const)

export const removeTodoList = (id: string) => ({
    type: 'todoLists/REMOVE_TODO_LIST',
    payload: {id}
} as const)