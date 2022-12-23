import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


export interface FormDataType {
    login: string
    password: string
    checkbox: boolean
}

const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit} = props  // приходит с HOC
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field type="text"
                       name="login"
                       placeholder="Login"
                       component="input"/>
            </div>
            <div>
                <Field type="text"
                       name="password"
                       placeholder="password"
                       component="input"/>
            </div>
            <div>
                <Field type="checkbox"
                       name="remember me"
                       component="input"/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)