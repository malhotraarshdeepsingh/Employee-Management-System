import React, { createContext, useEffect, useState } from 'react'
import { getLocalStroage } from '../utils/LocalStrorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const[userData,setUserData] = useState(null)

  useEffect(()=>{
    const {employees, admin} = getLocalStroage()
    setUserData({employees,admin})
  },[])

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
