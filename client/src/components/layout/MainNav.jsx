import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function MainNav() {
  return (
    <div>
        <nav className='flex justify-between items-center py-5 px-10'>
            <h2 className='text-2xl font-bold'>Blogify</h2>
       
            <form className=' border-black border-1 px-2 py-1 w-1/2 rounded-full'>   
                <input type="text" name="" placeholder='Search...' className='px-2 w-full outline-0'/>
            </form>
          
            <div className='flex gap-7 items-center'>
                <div className='flex gap-5'>
                    <FontAwesomeIcon icon={faPlus} className='text-xl cursor-pointer'/>
                    <FontAwesomeIcon icon={faBell} className='text-xl cursor-pointer'/>
                </div>
                <div className='bg-black p-4 rounded-full cursor-pointer'>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default MainNav