import React from 'react';
import s from './Post.module.css';


type PostType = {
    message : string
}
const Post = (props: PostType) => {

    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRb0lOhuAbflByagOfYUg5R8F1zGO1aN4woA&usqp=CAU"
                alt="#"/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

export default Post;