import {setIsLoggedIn} from '../actions/auth-actions';

export type AuthReducerActionsType = ReturnType<typeof setIsLoggedIn>

export type AuthInitStateType = {
    isLoggedIn: boolean
}