import React from 'react';
import  s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>

            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="1"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New Posts
                </div>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post - 1
                </div>
                <div className={s.item}>
                    post - 2
                </div>
            </div>

        </div>
    );
};

