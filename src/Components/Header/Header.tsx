import React from 'react';

import styles from './Header.module.css'
import {Button} from '../1_Common/Button/Button';
import {useAppDispatch, useAppSelector} from '../../bll/store';
import {logout} from '../../bll/thunk/auth-thunks';

export const Header = () => {
    const dispatch = useAppDispatch()

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                {isLoggedIn && <Button onClick={onLogout}>Logout</Button>}
            </div>
        </div>
    );
};
