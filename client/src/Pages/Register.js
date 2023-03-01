import React from 'react'
import { Button, Form, Input } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';

function Register() {
    const onFinish = (values) => {
        console.log("Recieved values of form:", values);
    }

    return (
        <div className='authentication'>
            <div className='card p-3'>
                <h1 className='card-title text-center'>Welcome</h1>
                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item label='Name' name='name'>
                        <Input placeholder='Name' />
                    </Form.Item>
                    <Form.Item label='Email' name='email'>
                        <Input placeholder='Email' type='email'/>
                    </Form.Item>
                    <Form.Item label='Password' name='password'>
                        <Input placeholder='Password' type='password'/>
                    </Form.Item>
                    <Button className='primary-button my-3' htmlType='submit'>SIGN UP</Button>

                    <Link to='/login' className='anchor mt-2'>Click Here To Login</Link>
                </Form>
            </div>
        </div>
    )
}

export default Register
