import {setInitializeApp, setLoadingStatus} from '../actions/app-actions';

export type AppReducerActionsType = ReturnType<typeof setLoadingStatus>
    | ReturnType<typeof setInitializeApp>

export type LoadingStatusType = 'idle' | 'loading'

export type AppInitStateType = {
    loadingStatus: LoadingStatusType
    isInitialized: boolean
}