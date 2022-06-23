import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {todoListsReducer} from './reducers/todoLists-reducer';
import {tasksReducer} from './reducers/tasks-reducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';

const rootReducer = combineReducers({
    todoLists: todoListsReducer,
    tasks: tasksReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

type AppRootStateType = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch не подходит для thunk

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch: () => AppDispatchThunkActionType = useDispatch

export type AppDispatchThunkActionType = ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppRootActionsType>

type AppRootActionsType = any

//@ts-ignore
window.store = store