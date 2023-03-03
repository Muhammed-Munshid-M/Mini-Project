import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { setUser } from '../redux/userSlice'

function Routerprotected(props) {
    const {user} = useSelector((state)=> state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getUser = async()=>{
        try {
            const response = await axios.post('/api/user/get-user-info-by-id',{token : localStorage.getItem('token')},{
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("token")} `
                }
            })
            if (response.data.sucess) {
                dispatch(setUser(response.data.data))
            } else {
                localStorage.clear()
                navigate('/login')
            }
        } catch (error) {
            navigate('/login')
        }
    }

    useEffect(()=>{
        if (!user) {
            getUser()
        }
    },[])
    if(localStorage.getItem('token')) {
        return props.children
    } else {
        return <Navigate to='/login' />
    }
}

export default Routerprotected
