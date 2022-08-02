import {AuthInitStateType} from '../../types/auth-types';
import {authReducer} from '../auth-reducer';
import {setIsLoggedIn} from '../../actions/auth-actions';

let startState : AuthInitStateType

beforeEach(() => {
    startState = {
        isLoggedIn: false
    }
})

test('usr should be logged in', () => {
    const endState = authReducer(startState, setIsLoggedIn(true))

    expect(endState.isLoggedIn).toBeTruthy()
})