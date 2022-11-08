import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthProvider from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthProvider);

    if(loading){
        return <div>Loading...</div>
    }

    if(user && user.uid){
        return children;
    }
   
    return <Navigate to='/login'></Navigate>

        
  
};

export default PrivateRoute;