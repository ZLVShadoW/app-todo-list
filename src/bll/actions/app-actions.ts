import {LoadingStatusType} from '../types/app-types';

export const setLoadingStatus = (status: LoadingStatusType) => ({
    type: 'app/SET-LOADING-STATUS',
    payload: {status}
} as const)

export const setInitializeApp = (isInitialized: boolean) => ({
    type: 'app/SET_INITIALIZE_APP',
    payload: {isInitialized}
} as const)

export const setAppError = (message: string) => ({
    type: 'app/SET_APP_ERROR',
    payload: {message}
} as const)