import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { authState, loginInputType, login, authDismissError } from '../../../store/auth'
import TextInput from '../../View/components/Form/TextInput'
import { LoginFormProps } from './types'
import CustomModal from '../../View/components/CustomModal'

const LoginForm: React.FC<LoginFormProps> = (props) => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const onItemChange = (value: any, item: string | number) => setUserData(preValue => ({ ...preValue, [item]: value }))
    if (props.token) return <Redirect to="/" />
    return (
        <div className="w-50 mx-auto">
        <CustomModal show={!!props.error} body={props.error?.message} errors={props.error?.data} handleClose={props.onDismissError} error/>
            <div className="my-5">
                <h2 className="text-primary text-uppercase">Login To Your Account</h2>
            </div>
            <form onSubmit={(event) => event.preventDefault()}>
                <TextInput label='email' value={userData.email} onChange={(event: any) => onItemChange(event.target.value, 'email')} />
                <TextInput label='password' type="password" value={userData.password} onChange={(event: any) => onItemChange(event.target.value, 'password')} />
                <button className="btn btn-primary mt-3" onClick={() => props.onLogin(userData)} disabled={props.loading}>Login {props.loading && <div className="spinner-border spinner-border-sm" role="status"></div>}</button>
            </form>
            <p className="mt-3">Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    )
}

const mapStateToProps = (state: {auth: authState}) => {
    return {
        token: state.auth.token,
        loading: state.auth.loading,
        error: state.auth.error,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onLogin: (loginInput: loginInputType) => dispatch(login(loginInput)),
        onDismissError: () => dispatch((authDismissError())),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
