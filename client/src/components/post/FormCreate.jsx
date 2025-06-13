import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function CreateForm() {
  return (
    
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5 bg-white rounded-sm'>
            <input type="text" name="" id="" placeholder='Title' className='h-full w-full p-5 text-2xl outline-0' />
        </div>  
        <FormContent /> 
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faPlus} />
          <p>Add more section</p>
        </div>
      </div>

  )
}
function FormContent() {
  return (
      <div className='flex flex-col gap-5 bg-white p-5 rounded-sm'>
          <textarea type="text" placeholder='Write your Contents here...' className='w-full min-h-[30vh] outline-0 resize-y' />  
      </div>
  );
}

export default CreateForm