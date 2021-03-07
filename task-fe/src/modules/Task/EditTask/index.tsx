import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { Dispatch } from 'redux'
// import { authState } from '../../../store/auth'
import TextInput from '../../View/components/Form/TextInput'
import TextArea from '../../View/components/Form/TextArea'
// import CustomModal from '../../View/components/CustomModal'

const EditTask = (props: any) => {
    const [userData, setUserData] = useState({
        title: '',
        body: '',
    })

    const onItemChange = (value: any, item: string | number) => setUserData(preValue => ({ ...preValue, [item]: value }))
    if (!props.token) return <Redirect to="/" />
    return (
        <div className="w-50 mx-auto">
        {/* <CustomModal show={!!props.error} body={props.error?.message} errors={props.error?.data} handleClose={props.onDismissError} error/> */}
            <div className="my-5">
                <h2 className="text-primary text-uppercase">Add A New Task</h2>
            </div>
            <form onSubmit={(event) => event.preventDefault()}>
                <TextInput label='title' value={userData.title} onChange={(event: any) => onItemChange(event.target.value, 'title')} />
                <TextArea label='body' value={userData.body} onChange={(event: any) => onItemChange(event.target.value, 'body')} />
                <button className="btn btn-primary mt-3" onClick={() => console.log("hello")} disabled={false}>Add Task {props.loading && <div className="spinner-border spinner-border-sm" role="status"></div>}</button>
            </form>
        </div>
    )
}

// const mapStateToProps = (state: {auth: authState}) => {
//     return {
//         token: state.auth.token,
//         loading: state.auth.loading,
//         error: state.auth.error,
//     }
// }

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         onLogin: (loginInput: loginInputType) => dispatch(login(loginInput)),
//         onDismissError: () => dispatch((authDismissError())),
//     }
// }

export default EditTask
