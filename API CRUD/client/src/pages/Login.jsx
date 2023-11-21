import React, { useContext, useEffect, useRef, useState } from "react";
import { LoginContext } from "../context/LoginContextProvider";
import { toast } from "react-toastify";
import { backendUrl } from "../utils/backendUrl";
import { useNavigate } from "react-router-dom";

function Login() {
  const {isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [showPass,setShowPass] = useState(false)
  const navigate = useNavigate()


  useEffect(() => {
    if(isLoggedIn){
      navigate('/')
    }
  },[navigate])
  const handleSubmit = async  (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const formdata = new FormData()
    formdata.append('name',username)
    formdata.append('password',password)
    try{
      const response = await fetch(backendUrl('login'),{
        method:"POST",
        body:formdata
      })
      const result = await response.json()
      if(result.status == true){
        setIsLoggedIn(true)
        sessionStorage.setItem('isLoggedIn',true)
        navigate('/')
      }else{
        throw Error('username atau password salah')
      }
    }catch(err){
      console.log(err);
      toast.error('Usename atau password salah')
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Login
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  ref={usernameRef}
                  type="username"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  ref={passwordRef}
                  type={showPass?"text":"password"}
                  name="password"
                  id="password"
                  placeholder="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
              <input type="checkbox" id="show" checked={showPass} onChange={e => setShowPass(e.target.checked)} />
                <label
                  htmlFor="show"
                  className=" mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Show Password
                </label>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
