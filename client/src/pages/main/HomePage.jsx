import MainNav from '../../components/layout/MainNav'
import BlogCard from '../../components/blog/BlogCard'
import SideBlog from '../../components/blog/SideBlog'

function HomePage() {
  return (
    <div className='w-full min-h-screen bg-[#FAFAFA]'>
      <header className='bg-white'>
        <MainNav />
      </header>
      <main className='flex flex-1 overflow-hidden h-screen'>
          <div className='w-1/4 p-5 overflow-y-auto bg-white'>
            left
          </div>
          <div className='w-3/4 p-5 overflow-y-auto'>
            right
          </div> 
      </main>
    </div>
  )
}

export default HomePage