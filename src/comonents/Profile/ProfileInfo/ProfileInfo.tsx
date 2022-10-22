import React from 'react';
import style from './ProfileInfo.module.css'
import {ProfileType} from '../../../Redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';

type ProfileInfoType = {
    profile: ProfileType | null
}

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    const {profile} = props
    if(!profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="1"/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={profile.photos.large} alt=""/>
            </div>
        </div>
    );
};

