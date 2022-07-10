import {AppThunkType} from '../types/types';
import {AuthAPI, ResultCodeEnum} from '../../api/api';
import {setAppError, setInitializeApp, setLoadingStatus} from '../actions/app-actions';
import {setIsLoggedIn} from '../actions/auth-actions';

export const initializeApp = (): AppThunkType => async dispatch => {
    try {
        dispatch(setLoadingStatus('loading'))
        const res = await AuthAPI.me()
        if (res.data.resultCode === ResultCodeEnum.success) {
            dispatch(setIsLoggedIn(true))
        } else {
            dispatch(setAppError(res.data.messages[0]))
        }
    } catch (e: any) {
        dispatch(setAppError(e.message ? e.message : 'Some error occurred'))
    } finally {
        dispatch(setLoadingStatus('idle'))
        dispatch(setInitializeApp(true))
    }
}