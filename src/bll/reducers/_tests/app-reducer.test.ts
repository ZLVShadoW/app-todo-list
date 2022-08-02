import {AppInitStateType} from '../../types/app-types';
import {appReducer} from '../app-reducer';
import {setLoadingStatus} from '../../actions/app-actions';

let startState: AppInitStateType

beforeEach(() => {
    startState = {
        loadingStatus: 'idle',
        isInitialized: false,
        errorMessage: ''
    }
})

test('loadingStatus should be changed', () => {
    const endState = appReducer(startState, setLoadingStatus('loading'))

    expect(endState.loadingStatus).toBe('loading')
})