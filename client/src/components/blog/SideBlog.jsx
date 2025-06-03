import React from 'react'

function SideBlog() {
  const PopularTopics = ['Writing', 'Programming', 'Fun', 'Adventure'];
  
  return (
    <div className='px-5'>
      {[...Array(10)].map((_, index) => (
        <div key={index}>
          <h2 className='text-xl'>Popular Topics</h2>
          <div className='p-3'>
            {PopularTopics.map((topics, index) => (
              <div>
                <p key={index}>{topics}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SideBlog