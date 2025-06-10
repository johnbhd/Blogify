import MainNav from '../../components/layout/MainNav'
import BlogCard from '../../components/blog/BlogCard'
import SideBlog from '../../components/blog/SideBlog'

function HomePage() {

  return (
    <div className='w-full min-h-screen bg-[#fcfcfc] h-screen overflow-hidden'>
      <header className='bg-white'>
        <MainNav />
      </header>
      <main className='flex flex-1 '>
          <div className='w-1/6 p-5 overflow-y-auto bg-[#edeff2] h-screen hidden md:block'>
            <SideBlog />
          </div>
          <div className='md:w-5/6 p-5 h-screen overflow-y-auto'>
            <BlogCard />
          </div> 
      </main>
    </div>
  )
}

export default HomePage