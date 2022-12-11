import React from 'react';
import style from './ProfileInfo.module.css'
import {ProfileType} from '../../../Redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatus} from './ProfileStatus';

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateProfileStatus: (newStatus: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    const {profile, status, updateProfileStatus} = props
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="1"/>*/}
            {/*</div>*/}

            <ProfileStatus status={status} updateProfileStatus={updateProfileStatus}/>
            <div className={style.descriptionBlock}>
                <img src={profile.photos.large} alt=""/>
            </div>
        </div>
    );
};

