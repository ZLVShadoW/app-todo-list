import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {LoginFormType} from '../api/api';
import {useAppDispatch, useAppSelector} from '../bll/store';
import {login} from '../bll/thunk/auth-thunks';
import {Button} from '../Components/1_Common/Button/Button';
import * as Yup from 'yup';
import {Navigate} from 'react-router-dom';


const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'min symbols is 6').required('Required').typeError('Incorrect password'),
});

export const LoginPage = () => {
    const dispatch = useAppDispatch()

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    const initialValues: LoginFormType = {
        email: '',
        password: '',
        rememberMe: false
    }

    const onSubmit = (values: LoginFormType) => {
        dispatch(login(values))
    }

    if (isLoggedIn) return <Navigate to={'/'}/>

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}
                validationSchema={SignupSchema}>
            <Form>
                <div>
                    <label htmlFor={'email'}>email:
                        <Field type={'text'} name={'email'} id={'email'}/>
                        <ErrorMessage name="email"/>
                    </label>
                </div>
                <div>
                    <label htmlFor={'password'}>password
                        <Field type={'password'} name={'password'} id={'password'}/>
                        <ErrorMessage name="password"/>
                    </label>
                </div>
                <div>
                    <label htmlFor={'rememberMe'}>password
                        <Field type={'checkbox'} name={'rememberMe'} id={'rememberMe'}/>
                    </label>
                </div>
                <Button type={'submit'}>Log in</Button>
            </Form>
        </Formik>
    );
};
