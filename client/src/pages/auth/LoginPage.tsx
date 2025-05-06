import React from 'react';
import { FcGoogle } from 'react-icons/fc';

function LoginPage() {
  return (
    <div className="bg-white w-[90%] h-[67%] rounded-lg opacity-100 md:w-[60%] md:opacity-90 md:h-[80%]">
      <div className="flex justify-center items-center h-full ">
        <div className="flex flex-col justify-center items-center gap-2 w-full md:w-1/2 p-7">
          <h4 className="font-bold text-base md:text-lg">Blogify</h4>
          <h1 className="text-xl md:text-2xl font-semibold">Welcome Back!</h1>

          <div className="flex items-center justify-center gap-2 bg-gray-100 p-2 rounded-lg m-5 w-full hover:shadow-md cursor-pointer">
            <FcGoogle className="text-xl md:text-2xl" />
            <p className="text-xs md:text-sm">Sign in with Google</p>
          </div>

          <div className="flex items-center gap-4 w-full">
            <hr className="flex-grow border-gray-300" />
            <span className="text-gray-500 text-xs md:text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

       
          <div className="w-full max-w-sm min-w-[200px] flex flex-col gap-3 mt-4">
            <input type='text' className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email" />
            <input type='password' className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Password" />

          </div>
    

          <p className="text-xs md:text-sm underline cursor-pointer mt-1">Forgot Password</p>

          <button className="bg-[#1f1e6a] w-full rounded-sm p-2 text-white mt-2 text-sm md:text-base hover:bg-[#18175a] transition">
            Sign in
          </button>
          <p className="text-xs md:text-sm cursor-pointer mt-1">Don't have account yet? <span className='underline text-blue-900'>Sign Up</span></p>
        </div>

        <div className="hidden md:flex w-1/2 justify-center">
          <img src="/bgAuth.png" alt="Blogify" className="w-full max-w-[450px]" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
