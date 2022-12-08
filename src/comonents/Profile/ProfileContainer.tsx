import React, {ComponentType} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {RootReducerType} from '../../Redux/redux-store';
import {getProfileThunkCreator, ProfileType} from '../../Redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


type ProfileContainerType = MapStateToPropsType & MapDispatchPropsType;
type MapStateToPropsType = {
    profile: ProfileType | null

}
type MapDispatchPropsType = {
    getProfile: (userId: string | undefined) => void
}
type PathParamsType = {
    userId: string | undefined
}
type ownProfileContainerType = RouteComponentProps<PathParamsType> & ProfileContainerType

class ProfileContainer extends React.Component<ownProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }

        this.props.getProfile(userId)
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


export default compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchPropsType, {}, RootReducerType>(mapStateToProps, {
        getProfile: getProfileThunkCreator
    }),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)
