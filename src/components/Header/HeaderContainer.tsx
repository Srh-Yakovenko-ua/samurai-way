import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {authReducerStateType, logout} from '../../Redux/auth-reducer';
import {RootReducerType} from '../../Redux/redux-store';

type mapStateToProps = {
    data: authReducerStateType
    isAuth: boolean
    login: string | null
}
type mapDispatchToProps = {
    authLogout : () => void
}
type HeaderContainerType = mapStateToProps & mapDispatchToProps


class HeaderContainer extends React.Component<HeaderContainerType> {

    render = () => {
        const {isAuth , login , authLogout} = this.props

        return (
            <Header isAuth={isAuth} login={login} authLogout={authLogout}/>
        );
    }
}

const mapStateToProps = (state: RootReducerType): mapStateToProps => {
    return {
        data: state.auth,
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect<mapStateToProps, mapDispatchToProps, {}, RootReducerType>(mapStateToProps, {
    authLogout : logout,
})(HeaderContainer);