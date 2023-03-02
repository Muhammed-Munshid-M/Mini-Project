import React from 'react'
import { Button, Form, Input } from 'antd'
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast'
import {useSelector,useDispatch} from 'react-redux'

function Login() {
    const {loading} = useSelector(state => state.alerts)
    console.log(loading);
    const navigate = useNavigate()
    const onFinish = async(values) => {
        try {
            const response = await axios.post('/api/user/login',values)
            if (response.data.success) {
                toast.success(response.data.message)
                toast("Redirecting to home page")
                localStorage.setItem("token",response.data.data)
                navigate("/")
            } else {
                toast.error(response.data.message)
            }
           } catch (error) {
            toast.success("Something went wrong")
           }
    }

    return (
        <div className='authentication'>
            <div className='card p-3'>
                <h1 className='card-title text-center'>Welcome Back</h1>
                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item label='Email' name='email'>
                        <Input placeholder='Email' type='email'/>
                    </Form.Item>
                    <Form.Item label='Password' name='password'>
                        <Input placeholder='Password' type='password'/>
                    </Form.Item>
                    <Button className='primary-button my-3' htmlType='submit'>LOGIN</Button>

                    <Link to='/register' className='anchor mt-2'>Click Here To Sign Up</Link>
                </Form>
            </div>
        </div>
    )
}

export default Login
