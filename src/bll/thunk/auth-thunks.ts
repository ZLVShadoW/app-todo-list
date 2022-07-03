import {AuthAPI, LoginFormType, ResultCodeEnum} from '../../api/api';
import {AppThunkType} from '../types/types';
import {setIsLoggedIn} from '../actions/auth-actions';

export const login = (data: LoginFormType): AppThunkType => async dispatch => {
    try {
        const res = await AuthAPI.login(data)
        if (res.data.resultCode === ResultCodeEnum.success) {
            dispatch(setIsLoggedIn(true))
        }
    } catch (e) {

    }
}