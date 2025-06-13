  import NavCreate from "../../components/post/NavCreate"
  import CreateForm from "../../components/post/FormCreate"
  import SideBarForm from "../../components/post/SideBarForm"

  function CreatePost() {
    return (
      <div className="w-full h-screen overflow-hidden">
          <header className="	bg-white">
            <NavCreate />
          </header>
          <main className="flex flex-1 w-full h-screen ">
            <div className="h-screen bg-white w-fit p-3 overflow-y-auto">
              <SideBarForm /> 
            </div>
            <div className="bg-gray-100 flex-1 h-screen p-10 rounded-sm overflow-y-auto">
              <CreateForm />
            </div>
          </main>
      </div>
    )
  }

  export default CreatePost