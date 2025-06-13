import MainNav from "../../components/layout/MainNav"

function ViewPost() {

  const mockPostData = {
    title: "Adventure to the new World",
    author: "John Doe",
    followers: 20,
    date: "May 20, 2025", 
    img: "/img/banner.jpg", 
    user: "/img/user.jpg"
  };

  return (
    <div className='w-full min-h-screen bg-[#fcfcfc]'>
      <header className='fixed top-0 left-0 w-full z-50 bg-white'>
        <MainNav />
      </header>
      <main className="flex justify-center items-center pt-24">
        <div className="flex flex-col gap-5 w-full md:w-1/2 bg-gray-50 p-5 ">
          <PostHeader title = {mockPostData.title} author={mockPostData.author} followers={mockPostData.followers} date={mockPostData.date} user={mockPostData.user}/>
          <PostContent title ={mockPostData.title} img={mockPostData.img}/>
        </div>
      </main>

    </div>
  )
}
function PostHeader({ title, author, followers, date, user}) {
  return (
    <>
     <h2 className='text-4xl font-bold text-center'>{title}</h2>
      <div className="flex justify-between">
        <div className="flex gap-5">
        <img src={user} alt={author} className="w-15 rounded-full cursor-pointer" />
          <div>
            <p className='text-lg'>{author}</p>
            <p>{followers}k Followers</p>
          </div>
        </div>
        <div>
          <p className=''>{date}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <p>follow+</p>
          <p>like</p>
          <p>comment</p>
        </div>
        <div className="flex gap-5">
          <p>save</p>
          <p>share</p>
        </div>
      </div>

    </>
  );
}
function PostContent({title, img}) {

  const Contenttext = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet mattis molestie. Suspendisse tristique, urna sit amet consectetur mollis, sapien ligula aliquet libero, non tempus quam magna in justo. Nulla mollis turpis vitae orci maximus efficitur. Nulla scelerisque luctus laoreet. Curabitur egestas suscipit odio id congue. Cras interdum lectus ac orci finibus dapibus. Praesent blandit nibh ac felis tristique scelerisque.

Nulla facilisi. Nam luctus, neque eget dignissim pulvinar, justo mi dapibus odio, sodales hendrerit orci ante ac elit. Donec porta dictum justo, in pharetra lorem pulvinar eget. Vivamus at viverra justo, non malesuada risus. Maecenas risus libero, venenatis eu tellus non, lobortis mollis metus. Duis sagittis nibh at eros maximus varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut malesuada eget lectus quis gravida. Aenean blandit varius sapien id vestibulum. Nulla mollis arcu non justo sagittis, non ullamcorper quam pellentesque.
`;
  const paragraph = Contenttext.split(/\n\s*\n/);

  return (
    <div className="mt-2">
        <img src={img} alt={title} className="w-full h-[50vh]"/>
        <div className="flex flex-col gap-5 mt-4">
          {[...Array(10 )].map((_, index) => (
            <div key={index}>
              {paragraph.map((para, pindex) => (
                <p key={pindex}>{para}</p>
              ))}
            </div>
          ))}
        </div>
    </div>
  )
}

export default ViewPost