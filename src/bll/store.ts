import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {todoListsReducer} from './reducers/todoLists-reducer';
import {tasksReducer} from './reducers/tasks-reducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import thunk from 'redux-thunk';
import { AppDispatchThunkActionType, AppRootStateType } from './types/types';
import {appReducer} from './reducers/app-reducer';
import {authReducer} from './reducers/auth-reducer';

const rootReducer = combineReducers({
    todoLists: todoListsReducer,
    tasks: tasksReducer,
    app: appReducer,
    auth: authReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))


export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch: () => AppDispatchThunkActionType = useDispatch


//@ts-ignore
window.store = store