import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faCircleHalfStroke, faToggleOff, faRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';

function MainNav() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdown = useRef();

    const toggleDropDown = () => setIsOpen(prev => !prev);

    useEffect(() => {
        function ProfileToggle(event) {
            if(dropdown.current && !dropdown.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", ProfileToggle);
        return () => document.removeEventListener("mousedown", ProfileToggle);


    }, []);
  return (
    <div ref={dropdown}>
        <nav className='flex justify-between items-center py-5 px-8 md:px-10 '>
            <h2 className='text-2xl font-bold'>Blogify</h2>
       
            <form className='border-black border-1 px-4 py-1 w-1/2 rounded-full hidden md:flex'>   
                <span>
                    <FontAwesomeIcon icon={faSearch} className='text-gray-600'/>
                </span>
                <input type="text" name="" placeholder='Search...' className='px-2 w-full outline-0'/>
            </form>
          
            <div className='flex gap-7 items-center'>
                <div className='flex gap-7'>
                    <div className='md:hidden'>
                        <FontAwesomeIcon icon={faSearch} className='text-lg'/>
                    </div>
                    <FontAwesomeIcon icon={faPlus} className='text-xl cursor-pointer'/>
                    <p className='hidden md:inline'>Write</p>    
                </div>
                <div className='hidden md:inline'>
                    <FontAwesomeIcon icon={faBell} className='hidden md:inline text-xl cursor-pointer' />
                </div>
                

                <button onClick={toggleDropDown}>
                    <img src="/img/user.jpg" alt="" className='w-10 rounded-full cursor-pointer'/>
                </button>
            </div>
        </nav>
        {isOpen && (
            <div className='absolute right-0 bg-white shadow w-fit '>
                <div className='flex flex-col gap-5 p-5'> 

                    <div className='flex gap-4 mt-3'>
                        <img src="/img/user.jpg" alt="" className='w-15 rounded-full'/>
                        <div>
                            <h4>John Doe</h4>
                            <p>johndoe@gmail.com</p>
                        </div>
                    </div>
            
                    <div className='flex gap-5 items-center cursor-pointer'>
                        <FontAwesomeIcon icon={faUser} className='text-xl font-bold'/>
                        <p className='text-lg'>Profile</p>
                    </div>
            
                    <div className='flex gap-5 items-center cursor-pointer'>
                        <FontAwesomeIcon icon={faCircleHalfStroke} className='text-xl font-bold'/>
                        <p className='text-lg'>Dark Mode</p>
                        <FontAwesomeIcon icon={faToggleOff} className='text-3xl rounded-full absolute right-5'/>
                    </div>
                </div>
                <div className='border-gray-100 border-1 w-full '></div>
                <div className='p-5'>
                    <div className='flex gap-5 items-center cursor-pointer'>
                        <FontAwesomeIcon icon={faRightFromBracket} className='text-xl font-bold'/>
                        <p className='text-lg'>Logout</p>
                    </div>
                </div>
            </div>  
        )}
               
    </div>
  )
}

export default MainNav