import React from 'react'
import Login from '../Pages/Auth/Login'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default AuthLayout
