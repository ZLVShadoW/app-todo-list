import {AppInitStateType, AppReducerActionsType} from '../types/app-types';

const initState: AppInitStateType = {
    loadingStatus: 'idle',
    isInitialized: false,
    errorMessage: ''
}

export const appReducer = (
    state: AppInitStateType = initState,
    action: AppReducerActionsType
): AppInitStateType => {
    switch (action.type) {
        case 'app/SET-LOADING-STATUS':
            return {...state, loadingStatus: action.payload.status}
        case 'app/SET_INITIALIZE_APP':
            return {...state, isInitialized: action.payload.isInitialized}
        case 'app/SET_APP_ERROR':
            return {...state, errorMessage: action.payload.message}
        default:
            return state
    }
}