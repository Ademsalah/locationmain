import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {fetchAuthUser} from '../../api/authuser'
import Login from '../login/Login'

import Admin from '../Admin/Admin'
import {useDispatch,useSelector} from 'react-redux'
import { setAuth } from '../../redux/authSlice'
import Client from '../User/Client'

const PrivateRoute = () => {
  const dispatch =  useDispatch()
  const navigate = useNavigate()

  const authUser = useSelector(state=>state.auth)

  console.log(' data  auth -_- => ',authUser)
  const getAcount=async()=>{
    try{
      const data = await fetchAuthUser()
      console.log('data login =WWWWWWWWWW/*  */', data)
      await dispatch(setAuth(data)) 
    }catch(err){
      console.log(err)
    }
  }
  
  useEffect(()=>{
    getAcount()
  },[])

const token = localStorage.getItem('token')


useEffect(()=>{
  !token &&  navigate('/login') 
},[token,authUser])
  return (
    <div>
{
  (authUser.role === "admin" ? navigate('/admin') : navigate('/user'))
}
 
    </div>
    
  )
}

export default PrivateRoute