import {TodoListType} from '../../types/types';
import {
    addTodoList,
    changeTodoList,
    removeTodoList,
    setTodoLists
} from '../actions/todoLists-actions';

export type TodoListInitStateType = TodoListType[]

export type AddTodoList = ReturnType<typeof addTodoList>
export type RemoveTodoList = ReturnType<typeof removeTodoList>

export type TodoListsReducerActionsType = ReturnType<typeof setTodoLists>
    | AddTodoList
    | ReturnType<typeof changeTodoList>
    | RemoveTodoList
