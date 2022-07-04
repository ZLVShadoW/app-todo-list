import {FilterStatusesType, TodoListType} from '../../types/types';

export const setTodoLists = (todoLists: TodoListType[]) => ({
    type: 'todoLists/SET_TODO_LISTS',
    payload: {todoLists}
} as const)

export const changeTodoList = (
    id: string, title: string) => ({
    type: 'todoList/CHANGE_TODO_LIST',
    payload: {id, title}
} as const)

export const addTodoList = (todoList: TodoListType) => ({
    type: 'todoLists/ADD_TODO_LIST',
    payload: {todoList}
} as const)

export const removeTodoList = (id: string) => ({
    type: 'todoLists/REMOVE_TODO_LIST',
    payload: {id}
} as const)

export const changeFilter = (todoListId: string, filter: FilterStatusesType) => ({
    type: 'todoLists/CHANGE_FILTER',
    payload: {todoListId, filter}
} as const)

export const clearData = () => ({type: 'todoLists/CLEAR-DATA'} as const)