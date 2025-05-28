import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { SignUp } from '../../api/auth';

function SignupPage({ onSwitch }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [message, setMessage] = useState('');

    const[formData, setFormData] = useState({
        email: '', 
        password: '',
        confirmpassword: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const SignUpValidation = () => {
        if (formData.password !== formData.confirmpassword) {
            setMessage("Passwords do not match!");
            return false;
        }
        setMessage('');
        return true;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = SignUpValidation();
        if (!isValid) return;

        try {
            const data = await SignUp(formData);
            alert("Successful Register Account...");
            console.log('Signup success:', data);
            onSwitch();1
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-white w-[90%] h-[75%] rounded-lg opacity-100 md:w-[60%] md:opacity-90 md:h-[80%]">
            <div className="flex justify-center items-center h-full ">
            <div className="hidden md:flex w-1/2 justify-center">
                <img src="/bgAuth.png" alt="Blogify" className="w-full max-w-[450px]" />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 w-full md:w-1/2 p-7">
                <h4 className="font-bold text-base md:text-lg">Blogify</h4>
                <h1 className="text-xl text-center md:text-2xl font-semibold">Create an account to get started</h1>

                <div className="flex items-center justify-center gap-2 bg-gray-100 p-2 rounded-lg m-5 w-full hover:shadow-md cursor-pointer">
                <FcGoogle className="text-xl md:text-2xl" />
                <p className="text-xs md:text-sm">Sign up with Google</p>
                </div>

                <div className="flex items-center gap-4 w-full">
                    <hr className="flex-grow border-gray-300" />
                    <span className="text-gray-500 text-xs md:text-sm">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
          
                <div className='text-red-700 text-sm'>
                    {message}
                </div>
                <form onSubmit={handleSubmit} className="w-full max-w-sm min-w-[200px] flex flex-col gap-3 ">
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
                        <div className="max-w-sm w-full">
                            <div className="relative">
                            <input
                                type={showConfirm ? "text" : "password"}
                                name='confirmpassword'
                                value={formData.confirmpassword}
                                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                                required
                                />
                            <button
                                type="button"
                                onClick={() => setShowConfirm((prev) => !prev)}
                                className="absolute cursor-pointer inset-y-0 end-0 flex items-center px-3 text-slate-400 hover:text-slate-600"
                                >
                                <FontAwesomeIcon icon={showConfirm ? faEyeSlash : faEye} />
                            </button>
                            </div>
                        </div>
             
                <button type='submit' className="bg-[#1f1e6a] cursor-pointer w-full rounded-sm p-2 text-white mt-2 text-sm md:text-base hover:bg-[#18175a] transition">
                        Sign up
                </button>
                </form>
                <p className="text-xs md:text-sm cursor-pointer mt-1">Have exisisting account? <span onClick={onSwitch} className='underline text-blue-900'> Sign In</span></p>
            </div>

            </div>
        </div>
    )
}

export default SignupPage