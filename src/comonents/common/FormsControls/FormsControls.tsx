import React, {FC} from 'react';
import style from './FormsControls.module.css'

// типизация
const FormControl: React.FC<any> = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={`${style.formControls} ${hasError ? style.error : null}`}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea: FC<any> = ({input, meta, ...props}) => {
    return (
        <FormControl input={input} meta={meta}>
            <textarea {...input} {...props}/>
        </FormControl>
    )
}

export const Input: FC<any> = ({input, meta, ...props}) => {
    return (
        <FormControl input={input} meta={meta}>
            <input {...input} {...props}/>
        </FormControl>
    )
}