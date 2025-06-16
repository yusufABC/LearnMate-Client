import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const UseAuth = () => {
    const useInfo=use(AuthContext)
    return  useInfo

};

export default UseAuth;