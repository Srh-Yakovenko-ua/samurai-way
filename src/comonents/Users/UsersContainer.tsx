import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {RootReducerType} from '../../Redux/redux-store';
import {followAC, setUsersAC, unfollowAC, usersActionType} from '../../Redux/users-reducer';


const mapStateToProps = (state: RootReducerType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: (action: usersActionType) => void) => {
    return {
        follow: (userID: any) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: any) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);