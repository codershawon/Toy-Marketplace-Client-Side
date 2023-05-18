import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext()
    const location=useLocation()
    if(loading){
        <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>
};

export default PrivateRoutes;