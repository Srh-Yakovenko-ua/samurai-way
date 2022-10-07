import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {RootReducerType} from '../../Redux/redux-store';
import {followAC, setUsersAC, unfollowAC, usersActionType, usersType} from '../../Redux/users-reducer';


const mapStateToProps = (state: RootReducerType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: (action: usersActionType) => void) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: usersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);