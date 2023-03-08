import React from 'react'
import { Navigate } from 'react-router-dom'

function Routerpublic(props) {
    if(localStorage.getItem('token')) {
        console.log('ok');
        return <Navigate to='/'/>
    } else {
        return props.children
    }
}

export default Routerpublic
