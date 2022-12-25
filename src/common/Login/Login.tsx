import React, {FC} from 'react';
import {FormDataType, LoginReduxForm} from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../../Redux/auth-reducer';
import {RootReducerType} from '../../Redux/redux-store';
import {Redirect} from 'react-router-dom';

interface MapDispatchPropsType {
    login: (email: string, password: string, rememberMe: boolean) => void
}
interface MapStateToPropsType {
    isAuth : boolean
}

type LoginType = MapDispatchPropsType & MapStateToPropsType


const Login: FC<LoginType> = (props) => {
    const {login , isAuth} = props

    const onSubmit = ({email, password, rememberMe}: FormDataType) => {
        login(email, password, rememberMe)
    }
    
    if(isAuth) return <Redirect to={'/profile'}/>



    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        isAuth : state.auth.isAuth
    }
}
export default connect<MapStateToPropsType, MapDispatchPropsType, {}, RootReducerType>(mapStateToProps, {login})(Login)


