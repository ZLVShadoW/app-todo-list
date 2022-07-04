import {TodoListDomainType} from '../../types/types';
import {
    addTodoList, changeFilter,
    changeTodoList, clearData,
    removeTodoList,
    setTodoLists
} from '../actions/todoLists-actions';

export type TodoListInitStateType = TodoListDomainType[]

export type AddTodoList = ReturnType<typeof addTodoList>
export type RemoveTodoList = ReturnType<typeof removeTodoList>
export type ClearData = ReturnType<typeof clearData>

export type TodoListsReducerActionsType = ReturnType<typeof setTodoLists>
    | AddTodoList
    | ReturnType<typeof changeTodoList>
    | RemoveTodoList
    | ReturnType<typeof changeFilter>
    | ClearData
