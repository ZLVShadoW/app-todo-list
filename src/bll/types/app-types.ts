import {
    setAppError,
    setInitializeApp,
    setLoadingStatus
} from '../actions/app-actions';

export type AppReducerActionsType = ReturnType<typeof setLoadingStatus>
    | ReturnType<typeof setInitializeApp>
    | ReturnType<typeof setAppError>

export type LoadingStatusType = 'idle' | 'loading'

export type AppInitStateType = {
    loadingStatus: LoadingStatusType
    isInitialized: boolean
    errorMessage: string
}