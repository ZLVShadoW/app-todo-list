import {AppThunkType} from '../types/types';
import {AuthAPI, ResultCodeEnum} from '../../api/api';
import {setInitializeApp, setLoadingStatus} from '../actions/app-actions';
import {setIsLoggedIn} from '../actions/auth-actions';

export const initializeApp = (): AppThunkType => async dispatch => {
    try {
        dispatch(setLoadingStatus('loading'))
        const res = await AuthAPI.me()
        if (res.data.resultCode === ResultCodeEnum.success) {
            dispatch(setIsLoggedIn(true))
            dispatch(setLoadingStatus('idle'))
        }
    } catch (e: any) {

    } finally {
        dispatch(setInitializeApp(true))
    }
}