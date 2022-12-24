import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, requiredFiled} from '../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';

export interface AddMessageFormType {newMessageBody: string}
const maxLength = maxLengthCreator(25)

export const AddMessageForm: FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    const {
        handleSubmit
    } = props


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder="Enter your message"
                       component={Textarea}
                       name="newMessageBody"
                       validate={[requiredFiled, maxLength]}
                />
            </div>
            <button>Send</button>
        </form>
    )
}



export const AddMessageFormRedux = reduxForm<AddMessageFormType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)
