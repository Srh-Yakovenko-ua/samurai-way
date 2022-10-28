import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {authReducerStateType, setUserDataAC} from '../../Redux/auth-reducer';
import {RootReducerType} from '../../Redux/redux-store';

type mapStateToProps = {
    data: authReducerStateType
    isAuth: boolean
    login: string | null
}
type mapDispatchToProps = {
    setUserDataAC: (userId: number, email: string, login: string) => void
}
type HeaderContainerType = mapStateToProps & mapDispatchToProps


class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data
                    this.props.setUserDataAC(id, email, login)
                }
            });
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
    setUserDataAC: setUserDataAC,
})(HeaderContainer);