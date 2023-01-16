import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { RootState } from '../../store/store'
import { openNotificationWithIcon } from '../../utils/helper'

const Protectedroute = () => {
  const state = useSelector((state: RootState) => ({
    user: state.user.user,
    token: state.user.token,
    isAuthenticated: state.user.isAuthenticated
  }))

  const { user, token, isAuthenticated } = state
  
  if (token && isAuthenticated && user) {
    return <Outlet />
  } else {
    openNotificationWithIcon('error', 'Access Denied', 'Log in to continue.')
    return <Navigate to="/signin" />
  }
}

export default Protectedroute
