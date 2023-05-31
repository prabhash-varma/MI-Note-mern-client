import {Link, useNavigate} from 'react-router-dom';
import {store} from './App.js'
import React, { useEffect,useContext } from 'react'

function ProtectedRoute(props) {
    const {Component} = props;
    const navigate = useNavigate();
    const {userdata,setUserdata}=useContext(store);
    useEffect(() => {
        
        if(userdata.email===""){
            navigate('/login');
        }
    }, [])



  return <Component/>

  
}

export default ProtectedRoute