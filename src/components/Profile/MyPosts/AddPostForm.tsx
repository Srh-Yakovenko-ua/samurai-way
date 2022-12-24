import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


import {maxLengthCreator, requiredFiled} from '../../../utils/validators/validators';
import {Textarea} from '../../../common/FormsControls/FormsControls';

export interface AddPostFormType {newPost: string}
const maxLength = maxLengthCreator(30)

export const AddPostForm: FC<InjectedFormProps<AddPostFormType>> = (props) => {
    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="newPost"
                    component={Textarea}
                    placeholder="Enter your post"
                    validate={[requiredFiled, maxLength]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}


export const AddPostFormRedux = reduxForm<AddPostFormType>({
    form: 'ProfileAddNewPostForm'
})(AddPostForm)
