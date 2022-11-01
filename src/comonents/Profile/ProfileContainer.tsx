import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {RootReducerType} from '../../Redux/redux-store';
import {ProfileType, setUserProfileAC} from '../../Redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {profileApi} from '../../api/profileApi';


type ProfileContainerType = MapStateToPropsType & MapDispatchPropsType;
type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type PathParamsType = {
    userId: string | undefined
}
type ownProfileContainerType = RouteComponentProps<PathParamsType> & ProfileContainerType

class ProfileContainer extends React.Component<ownProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2';
        }
        profileApi.getProfile(userId).then(data => {
            this.props.setUserProfile(data)
        });
    }


    render = () => {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchPropsType, {}, RootReducerType>(mapStateToProps, {
    setUserProfile: setUserProfileAC
})(withUrlDataContainerComponent);