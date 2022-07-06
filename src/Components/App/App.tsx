import styles from './App.module.css';

import React from 'react';
import {useAppDispatch, useAppSelector} from '../../bll/store';
import {initializeApp} from '../../bll/thunk/app-thunks';
import {Routes, Route, Navigate} from 'react-router-dom'
import {TodoListsPage} from '../../Pages/TodoListsPage';
import {LoginPage} from '../../Pages/LoginPage';
import {ErrorPage} from '../../Pages/ErrorPage';
import {Header} from '../Header/Header';
import {Loader} from '../1_Common/Loader/Loader';
import {Notification} from '../1_Common/Notification/Notification';

function App() {
    const dispatch = useAppDispatch()

    const isInitialized = useAppSelector(state => state.app.isInitialized)
    const loadingStatus = useAppSelector(state => state.app.loadingStatus)

    React.useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    if (!isInitialized) return <Loader/>

    return (
        <>
            <Header/>

            {loadingStatus === 'loading' && <Loader/>}

            <div className={styles.container}>
                <Routes>
                    <Route path={'/'} element={<TodoListsPage/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'/404'} element={<ErrorPage/>}/>
                    <Route path={'*'} element={<Navigate to={'/404'}/>}/>
                </Routes>
            </div>

            <Notification/>

        </>
    );
}

export default App;
