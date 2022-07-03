import {AuthInitStateType, AuthReducerActionsType} from '../types/auth-types';

const initState: AuthInitStateType = {
    isLoggedIn: false
}

export const authReducer = (
    state: AuthInitStateType = initState,
    action: AuthReducerActionsType
): AuthInitStateType => {
    switch (action.type) {
        case 'auth/SET_IS_LOGGED_IN':
            return {...state, isLoggedIn: action.payload.isLoggedIn}
        default:
            return state
    }
}