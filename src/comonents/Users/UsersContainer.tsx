import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {RootReducerType} from '../../Redux/redux-store';
import {usersActionType} from '../../Redux/users-reducer';


const mapStateToProps = (state: RootReducerType) => {
    return {}
}
const mapDispatchToProps = (dispatch: (action: usersActionType) => void) => {
    return {}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);