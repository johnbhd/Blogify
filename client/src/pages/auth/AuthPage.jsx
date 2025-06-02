import { useState, useEffect } from "react"
import LoginPage from "./LoginPage"
import SignupPage from "./SignupPage"

function Loader() {
  return (
    <div className='flex justify-center items-center h-screen bg-[#cce4ff]'>
      <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full animate-pulse bg-blue-700"></div>
          <div className="w-5 h-5 rounded-full animate-pulse bg-blue-700"></div>
          <div className="w-5 h-5 rounded-full animate-pulse bg-blue-700"></div>
      </div>
    </div>
  )
}

function AuthPage() {
  const [isLogin, setisLogin] = useState(true);
  const [isLoader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 2500);
    return () => clearTimeout(timer);
  });

  if (isLoader) {
    return <Loader />
  }
  return (
    <div className="bg-[linear-gradient(to_right,_#cce4ff_50%,_#1f1e6a_50%)] h-screen">
        <div className="flex justify-center items-center h-screen">
            {isLogin ? (
                <LoginPage onSwitch={() => setisLogin(false)}/>
              ) : (
                <SignupPage onSwitch={() => setisLogin(true)}/>
              )}
        </div>        
    </div>
  )
}

export default AuthPage