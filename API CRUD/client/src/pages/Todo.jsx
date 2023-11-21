import React, { useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { LoginContext } from "../context/LoginContextProvider";
import { FaPowerOff } from "react-icons/fa";

function Todo() {
  const {isLoggedIn,setIsLoggedIn} = useContext(LoginContext)
  const navigate = useNavigate()

  const logout = () => {
    sessionStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
    navigate('/login')
  }
  
  useEffect(() => {
    if(!isLoggedIn){
      navigate('/login')
    }
  },[])

  return (
    <div className="mx-auto mt-2 w-full max-w-3xl min-h-[90vh] shadow-lg rounded-md overflow-hidden">
      <div className="w-full bg-gradient-to-br from-green-400 to-teal-400 p-6 flex justify-between items-center">
        <h1 className="text-3xl font-black text-white">Todo App</h1>
        <div className="flex gap-2 text-2xl">
        <Link to="add"><FaPlusCircle className="text-white" /></Link>
        <button onClick={logout}><FaPowerOff className="text-red-400" /></button>

        </div>
      </div>
      <div className="p-2">
        <Outlet />
      </div>
    </div>
  );
}

export default Todo;
