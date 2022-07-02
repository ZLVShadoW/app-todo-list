import styles from './App.module.css';

import React from 'react';
import {useAppDispatch} from '../../bll/store';
import {initializeApp} from '../../bll/thunk/app-thunks';
import {Routes, Route, Navigate} from 'react-router-dom'
import {TodoListsPage} from '../../Pages/TodoListsPage';
import {LoginPage} from '../../Pages/LoginPage';
import {ErrorPage} from '../../Pages/ErrorPage';

function App() {
    const dispatch = useAppDispatch()

    // const isInitialized = useAppSelector(state => state.app.isInitialized)

    React.useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    return (
        <>
            <div style={{height: 85, background: '#ddd', marginBottom: 25}}></div>
            <div className={styles.container}>
                <Routes>
                    <Route path={'/'} element={<TodoListsPage/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'/404'} element={<ErrorPage/>}/>
                    <Route path={'*'} element={<Navigate to={'/404'}/>}/>
                </Routes>
            </div>

        </>
    );
}

export default App;
