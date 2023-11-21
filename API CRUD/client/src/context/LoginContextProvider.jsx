import React, { createContext, useState } from 'react'

export const LoginContext = createContext(null)
function LoginContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn')||false)
  return (
    <LoginContext.Provider value={{ isLoggedIn,setIsLoggedIn }}>
        {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider