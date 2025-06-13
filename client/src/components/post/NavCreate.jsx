import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function NavCreate() {
  return (
    <nav className='flex justify-between items-center p-5'>
        <div className='flex gap-5 items-center '>
          <Link to='/Home'>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <h2 className='text-xl font-bold'>Share Your Skills & Stories</h2>
        </div>

        <div className='flex gap-5 cursor-pointer'>
          <p>Preview</p>
          <p>Draft</p>
          {/*  <p>Edit</p> if edit page then show view if view page show edit */}
          <p>Post</p>
        </div>
    </nav>
  )
}

export default NavCreate