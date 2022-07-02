import {AppInitStateType, AppReducerActionsType} from '../types/app-types';

const initState: AppInitStateType = {
    loadingStatus: 'idle',
    isInitialized: false
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
        default:
            return state
    }
}