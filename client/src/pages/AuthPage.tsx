import React from "react"
import LoginPage from "./auth/LoginPage"

function AuthPage() {
  return (
    <div className="bg-[linear-gradient(to_right,_#cce4ff_50%,_#1f1e6a_50%)] h-screen">
        <div className="flex justify-center items-center h-screen">
            <LoginPage />
        </div>        
    </div>
  )
}

export default AuthPage