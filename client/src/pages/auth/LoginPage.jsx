import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Login } from '../../api/auth';

function LoginPage( { onSwitch } ) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await Login(formData);
      console.log(data.token);
      console.log(data);
      alert('Login Successfully...');
      
      const from = location.state?.from?.pathname || '/Home';
      navigate(from, {replace: true});
      window.location.reload();
      
    } catch (error) {
      console.log(error);
        if (error.response && error.response.data && error.response.data.error) {
          setMessage(error.response.data.error);
        } else {
          setMessage('Invalid email or password, try again.');
        }
    }
  }

  const googleAuth = () => {
    const from = location.state?.from?.pathname || '/Home';
    
    window.open(`http://localhost:3000/api/auth/google?redirect=${encodeURIComponent(from)}`, "_self");
  };

  return (
    <div className="bg-white w-[90%] h-fit rounded-lg opacity-100 md:w-[60%] md:opacity-90 md:h-fit">
      <div className="flex justify-center items-center h-full ">
        <div className="flex flex-col justify-center items-center gap-2 w-full md:w-1/2 p-7">
          <h4 className="text-base md:text-xl">Blogify</h4>
          <h1 className="text-xl md:text-2xl font-bold">Sign in to your account</h1>

          <div 
            className="flex items-center justify-center gap-2 bg-gray-100 p-2 rounded-lg m-5 w-full hover:shadow-md cursor-pointer"
            onClick={googleAuth}
          >
            <FcGoogle className="text-xl md:text-2xl" />
            <p className="text-xs md:text-lg">Sign in with Google</p>
          </div>

          <div className="flex items-center gap-4 w-full">
            <hr className="flex-grow border-gray-300" />
            <span className="text-gray-500 text-xs md:text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
     
          <div className='text-red-700 text-sm'>
              {message}
          </div> 
          <form onSubmit={handleSubmit} className="w-full max-w-sm min-w-[200px] flex flex-col gap-3 mt-2">
            <input 
              type='email'
              name='email'
              value={formData.email} 
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" 
              placeholder="Email" 
              onChange={handleChange}
              required
            />
            <div className="max-w-sm w-full">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name='password'
                  value={formData.password}
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute cursor-pointer inset-y-0 end-0 flex items-center px-3 text-slate-400 hover:text-slate-600"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
      
              <p className="text-xs md:text-sm underline cursor-pointer mt-1">Forgot Password</p>

              <button type='submit' className="bg-[#1f1e6a] cursor-pointer w-full rounded-sm p-2 text-white mt-2 text-sm md:text-base hover:bg-[#18175a] transition">
                Sign in
              </button>
            </form>
            <p className="text-xs md:text-sm cursor-pointer mt-1">Don't have account yet? <span onClick={onSwitch} className='underline text-blue-900'> Sign Up</span></p>
          </div>

        <div className="hidden md:flex w-1/2 justify-center">
          <img src="/bgAuth.png" alt="Blogify" className="w-full max-w-[450px]" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
