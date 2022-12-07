import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {RootReducerType} from '../Redux/redux-store';

interface mapStateToPropsType {
    isAuth: boolean
}

const mapStateToProps = (state: RootReducerType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponents(props: mapStateToPropsType) {
        const {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    return connect<mapStateToPropsType, {}, {}, RootReducerType>(mapStateToProps)(RedirectComponents)
}

