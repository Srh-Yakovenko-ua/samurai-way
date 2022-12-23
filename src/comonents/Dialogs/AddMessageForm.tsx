import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


export const AddMessageForm: FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    const {
        handleSubmit
    } = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder="Enter your message"
                       component="textarea"
                       name="newMessageBody"
                />
            </div>
            <button>Send</button>
        </form>
    )
}

export interface AddMessageFormType {
    newMessageBody: string
}

export const AddMessageFormRedux = reduxForm<AddMessageFormType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)
