import React from 'react';
import {Field, reduxForm} from 'redux-form';


export const Login = () => {

    const onSubmit = (formData : any) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


const LoginForm = (props : any) => {
    const { handleSubmit } = props  // приходит с HOC
    console.log(props)
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field type="text"
                       name='login'
                       placeholder="Login"
                       component='input'/>
            </div>
            <div>
                <Field type="text"
                       name='password'
                       placeholder="password"
                       component='input'/>
            </div>
            <div>
                <Field type="checkbox"
                       name='remember me'
                       component='input'/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form : 'login'
})(LoginForm)