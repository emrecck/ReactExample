import React from 'react'
import PropTypes from 'prop-types'
import Login from '../../components/Login/Login'

const LoginView = ({ isShowMain, setShowMain }) => {
    return (
        <>
            {!isShowMain ? <Login isShowMain={isShowMain} setShowMain={setShowMain} /> : null}
        </>
    )
}

LoginView.PropType = {
    setShowMain: PropTypes.func
}

export default LoginView