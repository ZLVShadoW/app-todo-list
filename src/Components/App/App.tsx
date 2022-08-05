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
import {PATH} from '../../Pages/pagesRouts';


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
                    <Route path={PATH.TODO_LISTS} element={<TodoListsPage/>}/>
                    <Route path={PATH.LOGIN} element={<LoginPage/>}/>
                    <Route path={PATH.ERROR} element={<ErrorPage/>}/>
                    <Route path={'*'} element={<Navigate to={PATH.ERROR}/>}/>
                </Routes>
            </div>

            <Notification/>

        </>
    );
}

export default App;
