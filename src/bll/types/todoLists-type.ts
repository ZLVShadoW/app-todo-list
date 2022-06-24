import {TodoListType} from '../../types/types';
import {addTodoList, setTodoLists} from '../actions/todoLists-actions';

export type TodoListInitStateType = TodoListType[]

export type AddTodoList = ReturnType<typeof addTodoList>

export type TodoListsReducerActionsType = ReturnType<typeof setTodoLists>
| AddTodoList