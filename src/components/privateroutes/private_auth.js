import { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';

function PrivateRouteAutenticated({ children }) {

    const [authUser, SetAuthUser] = useState(true); 
    
    useEffect(() => {
        const token = localStorage.getItem("__token");
        if(token){
            var token_validate = token.length > 20;
            token_validate ? SetAuthUser(true) : SetAuthUser(false)
            console.log(token_validate)
        }else{
            SetAuthUser(false)
        }
    },[]); 

    if (authUser === false) {
        return <Navigate to="/login" />
    }
    return children;
}

export default PrivateRouteAutenticated;