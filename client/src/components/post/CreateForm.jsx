import React from 'react'

function CreateForm() {
  return (
    <div className='flex-1 bg-gray-200 p-5 rounded-sm'>
        <div className='flex flex-col gap-5 bg-white p-5'>
            <h2>Write new Blog....</h2>
            <textarea type="text" placeholder='Input' className='w-full h-[70vh] outline-0 resize-none' />  
        </div>
    </div>
  )
}

export default CreateForm