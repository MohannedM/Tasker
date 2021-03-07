import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'
import { logout } from '../../store/auth'

export default function LogoutPage() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(logout())
    },[]) //eslint-disable-line
    return <Redirect to="/" />
}

