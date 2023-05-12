import React from 'react'
import { Outlet } from 'react-router-dom'
import Header2 from '../includes/Header/Header2'

const LoginLayout = () => {
  return (
    <div className='mx-14 my-4'>
        <Header2></Header2>
        <Outlet></Outlet>
    </div>
  )
}

export default LoginLayout