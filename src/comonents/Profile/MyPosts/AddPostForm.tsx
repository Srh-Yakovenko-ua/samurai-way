import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export interface AddPostFormType {
    newPost: string
}
export const AddPostForm: FC<InjectedFormProps<AddPostFormType>> = (props) => {
    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="newPost"
                    component="textarea"
                    placeholder="Enter your post"
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
