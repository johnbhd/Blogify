import React from 'react'

function SideBarForm() {
  return (
    <div className='flex flex-col gap-4'>
      <AssitantAI />  
      <FormSettings />
    </div>
  )
}
function AssitantAI() {
  return (
    <div>
        <h2 className='font-semibold'>🤖 AI Assistant</h2>
        <div className='flex flex-col gap-3 py-3 px-7'>
          <div>
            <h4>Prompt</h4>
            <textarea className="w-full rounded-sm border border-gray-300 p-2 outline-0 mt-2 resize-none" name="" id="" placeholder="Suggest a title (topic)"></textarea>
          </div>
          <div>
            <h4>Insert To</h4>
            <select className='w-full rounded-sm border border-gray-300 p-2 outline-0 mt-2' >
              <option value="" >Title</option>
              <option value="" >Introduction</option>
              <option value="" >Body</option>
            </select>
          </div>
          <div>
            <h4>Tone</h4>
            <select className='w-full rounded-sm border border-gray-300 p-2 outline-0 mt-2'>
              <option value="">Normal</option>
              <option value="">Formal</option>
              <option value="">Concise</option>
            </select>
          </div>
        </div>
    </div>
  );
}
function FormSettings() {
  return (
    <div>
         <h2 className='font-semibold'>⚙️ Blog Settings</h2>
         <div className='flex flex-col gap-3 py-3 px-7'>
            <div>
              <h4>Visibility</h4>
              <select className='w-full rounded-sm border border-gray-300 p-2 outline-0 mt-2' >
                <option value="" >Public</option>
                <option value="" >Private</option>
              </select>
            </div>
            <div>
              <h4>Tags</h4>
              <input type="text" placeholder='#tech, #business..' className='w-full rounded-sm border border-gray-300 p-2 outline-0 mt-2' />
            </div>
         </div>
    </div>
  );
}
export default SideBarForm