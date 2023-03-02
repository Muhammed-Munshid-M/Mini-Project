import React from 'react'
import { Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom';

function Login() {
    const onFinish = (values) => {
        console.log("Recieved values of form:", values);
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
