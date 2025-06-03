import MainNav from '../../components/layout/MainNav'
import BlogCard from '../../components/blog/BlogCard'
import SideBlog from '../../components/blog/SideBlog'

function HomePage() {

  return (
    <div className='w-full min-h-screen bg-[#FAFAFA] h-screen  overflow-hidden'>
      <header className='bg-white'>
        <MainNav />
      </header>
      <main className='flex flex-1 '>
          <div className='w-1/6 p-5 overflow-y-auto bg-white h-screen'>
            <SideBlog />
          </div>
          <div className='w-5/6 p-5 h-screen overflow-y-auto'>
            <BlogCard />
          </div> 
      </main>
    </div>
  )
}

export default HomePage