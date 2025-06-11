  import NavCreate from "../../components/post/NavCreate"
  import CreateForm from "../../components/post/CreateForm"
  import SideBarForm from "../../components/post/SideBarForm"

  function CreatePost() {
    return (
      <div className="w-full h-screen flex flex-col">
          <header className="bg-white">
            <NavCreate />
          </header>
          <main className="flex flex-1 w-full">
            <SideBarForm />
            <CreateForm />
          </main>
      </div>
    )
  }

  export default CreatePost