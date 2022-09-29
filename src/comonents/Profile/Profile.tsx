import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {storeType} from '../../Redux/redux-store';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';


type PropsTypeProfile = {
    store: storeType
}

export const Profile: React.FC<PropsTypeProfile> = (props) => {
    const {store} = props

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>

        </div>
    );
};

