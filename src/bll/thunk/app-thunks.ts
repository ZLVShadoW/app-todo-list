import {AppThunkType} from '../types/types';
import {AuthAPI, ResultCodeEnum} from '../../api/api';
import { setInitializeApp } from '../actions/app-actions';
import {setIsLoggedIn} from '../actions/auth-actions';

export const initializeApp = (): AppThunkType => async dispatch => {
    try {
        const res = await AuthAPI.me()
        if (res.data.resultCode === ResultCodeEnum.success) {
            dispatch(setInitializeApp(true))
            dispatch(setIsLoggedIn(true))
        }
    } catch (e: any) {

    }
}