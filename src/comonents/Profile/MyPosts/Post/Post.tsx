import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRb0lOhuAbflByagOfYUg5R8F1zGO1aN4woA&usqp=CAU" alt="#"/>
            post - 1
            <div>
                <span>Like</span>
                <span> Dislike</span>
            </div>
        </div>
    );
};

export default Post;