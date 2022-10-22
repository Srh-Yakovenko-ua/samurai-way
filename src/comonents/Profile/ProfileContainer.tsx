import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {RootReducerType} from '../../Redux/redux-store';
import {ProfileType, setUserProfileAC} from '../../Redux/profile-reducer';

type ProfileContainerType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType | null
}
type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        axios
            .get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }


    render = () => {
        return <Profile {...this.props} profile={this.props.profile}/>
    }

}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect<MapStateToPropsType, MapDispatchPropsType, {}, RootReducerType>(mapStateToProps, {
    setUserProfile: setUserProfileAC
})(ProfileContainer);