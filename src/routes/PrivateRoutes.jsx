import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProviders'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    if(loading){
        return <progress className="progress w-100"></progress>
    }
    if(user?.email){
        return children
    }
    <Navigate to="/login"></Navigate>
}

export default PrivateRoutes