import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({children}) => {
    const{user,loader}=useContext(AuthContext)
    if(loader){
        return <div className='mx-auto text-center mt-96'><span className="loading loading-bars loading-sm"></span>
<span className="loading loading-bars loading-md"></span>
<span className="loading loading-bars loading-lg"></span>
<span className="loading loading-bars loading-xl"></span></div>
    }
    if(!user || !user?.email){
       return <Navigate to="/signin"></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;