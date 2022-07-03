import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {TodoListsReducerActionsType} from './todoLists-type';
import {TasksReducerActionsType} from './tasks-type';
import {store} from '../store';
import {AppReducerActionsType} from './app-types';
import {AuthReducerActionsType} from './auth-types';

export type AppRootStateType = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch не подходит для thunk

export type AppDispatchThunkActionType = ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppRootActionsType>

type AppRootActionsType =
    TodoListsReducerActionsType
    | TasksReducerActionsType
    | AppReducerActionsType
    | AuthReducerActionsType
