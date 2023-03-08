import React, { useEffect } from 'react'
import axios from 'axios'
import Layout  from '../components/Layout'

function Home() {
    const getData=async()=>{
        try {
            const token = localStorage.getItem('token')
            const response = await axios.post('/api/user/get-user-info-by-id', {} ,
            {
                headers : {
                    Authorization :`Bearer ${token}`
                }
            })
            console.log('response:'+response.data);
        } catch (error) {
            console.log(error);
        }
    }
  
    useEffect(()=>{
        getData()
    },[])
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  )
}

export default Home
