import {combineReducers, legacy_createStore} from 'redux';
import { todoListReducer } from './reducers/todoList-reducer';
import {tasksReducer} from './reducers/tasks-reducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const rootReducer = combineReducers({
    todoList: todoListReducer,
    tasks: tasksReducer
})

export const store = legacy_createStore(rootReducer)

type AppRootStateType = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

//@ts-ignore
window.store = store