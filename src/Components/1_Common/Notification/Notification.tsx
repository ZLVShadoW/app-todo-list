import styles from './Notification.module.css';

import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../bll/store';
import {setAppError} from '../../../bll/actions/app-actions';


export const Notification = () => {
    const dispatch = useAppDispatch()

    const errorMessage = useAppSelector(state => state.app.errorMessage)

    const onCloseHandle = () => {
        dispatch(setAppError(''))
    }

    React.useEffect(() => {
        const id = setTimeout(onCloseHandle, 5500)

        return () => {
            clearTimeout(id)
        }
    }, [errorMessage])

    return (
        <>
            {errorMessage
                ? <div className={styles.notification}>
                    {errorMessage}
                    <span className={styles.btn}
                          onClick={onCloseHandle}>&times;</span>
                </div>
                : null
            }
        </>
    );
};
