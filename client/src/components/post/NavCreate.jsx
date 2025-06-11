import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function NavCreate() {
  return (
    <nav className='flex justify-between items-center bg-blue-200 p-5'>
        <div className='flex gap-5 items-center '>
          <Link to='/Home'>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <h2 className='text-lg font-bold'>Blogify</h2>
        </div>

        <div className='flex gap-5 cursor-pointer'>
          <p>Edit</p>
          <p>Draft</p>
          {/*  <p>Preview</p> if edit page then show view if view page show edit */}
          <p>Post</p>
        </div>
    </nav>
  )
}

export default NavCreate