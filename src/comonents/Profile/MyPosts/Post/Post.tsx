import React from 'react';
import style from './Post.module.css';


export type PostType = {
    message: string
    likesCount: number
}

const Post = (props: PostType) => {

    return (
        <div className={style.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRb0lOhuAbflByagOfYUg5R8F1zGO1aN4woA&usqp=CAU"
                alt="#"/>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;