import React, {ComponentType} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {RootReducerType} from '../../Redux/redux-store';
import {
    getProfileThunkCreator,
    getStatusProfileThunkCreator,
    ProfileType,
    updateStatusProfileThunkCreator
} from '../../Redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


type ProfileContainerType = MapStateToPropsType & MapDispatchPropsType;
type MapStateToPropsType = {
    profile: ProfileType | null
    status: string

}
type MapDispatchPropsType = {
    getProfile: (userId: string | undefined) => void
    getProfileStatus: (userId: string | undefined) => void
    updateProfileStatus: (newStatus: string) => void
}
type PathParamsType = {
    userId: string | undefined
}
type ownProfileContainerType = RouteComponentProps<PathParamsType> & ProfileContainerType

class ProfileContainer extends React.Component<ownProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '26185'
        }
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)

    }


    render = () => {
        return <Profile
            status={this.props.status}
            updateProfileStatus={this.props.updateProfileStatus}
            profile={this.props.profile}/>
    }
}


const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}


export default compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchPropsType, {}, RootReducerType>(mapStateToProps, {
        getProfile: getProfileThunkCreator,
        getProfileStatus: getStatusProfileThunkCreator,
        updateProfileStatus: updateStatusProfileThunkCreator
    }),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)
