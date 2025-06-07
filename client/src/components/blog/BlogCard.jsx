import { Link } from "react-router-dom";

function BlogCard() {
  const reapeat = 100;
  return (
    <div className='flex flex-wrap justify-center gap-5'>
        {[...Array(reapeat)].map((_, index) => (
          <Link to='/Blog/johndoe/Adventure-3242dfd' >
            <Card key={index}/>
          </Link>
        ))}
    </div>
  )
}
function Card() {
  return (
    <div className='w-65 h-full bg-blue-200 rounded-lg cursor-pointer'>
      <img src="/img/banner.jpg" alt="Banner Blog" className='object-cover w-full h-30 rounded-t-lg'/>  
      <div className='flex gap-5 px-4 py-2'>
        <div className='bg-black p-4 h-2 rounded-full cursor-pointer'>
        </div>
        <div>
          <h4 className='text-md font-bold pb-1'>Adventure to the New World</h4>
          <p className='text-sm '>John Doe</p>
          <p className='text-sm '>May 20, 2025</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard