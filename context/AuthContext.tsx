"use client"

import React, { createContext, useContext, useState } from 'react'

interface IUser {
  id: string
  email: string
}

const AuthContext = createContext({
  user: null as null | IUser,
  setUser: (user: null | IUser) => {},
})

// * Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null as null | IUser)


  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
