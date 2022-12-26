import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../FormsControls/FormsControls';
import {requiredFiled} from '../../utils/validators/validators';
import style from './../FormsControls/FormsControls.module.css'

export interface FormDataType {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit, error} = props  // приходит с HOC
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field type="text"
                       name="email"
                       placeholder="email"
                       validate={[requiredFiled]}
                       component={Input}/>
            </div>
            <div>
                <Field type="password"
                       name="password"
                       placeholder="password"
                       validate={[requiredFiled]}
                       component={Input}/>
            </div>
            <div>
                <Field type="checkbox"
                       name="rememberMe"
                       component={Input}/> remember me
            </div>
            {error && <div className={style.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)