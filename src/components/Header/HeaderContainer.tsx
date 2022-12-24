import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {authLoginThunkCreator, authReducerStateType} from '../../Redux/auth-reducer';
import {RootReducerType} from '../../Redux/redux-store';

type mapStateToProps = {
    data: authReducerStateType
    isAuth: boolean
    login: string | null
}
type mapDispatchToProps = {
    authLogin: () => void
}
type HeaderContainerType = mapStateToProps & mapDispatchToProps


class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.authLogin()
    }


    render = () => {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
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
    authLogin: authLoginThunkCreator
})(HeaderContainer);