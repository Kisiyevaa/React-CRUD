import React, { useState } from 'react'
import TaskCreate from './TaskCreate'

function TaskShow({task,onDeleteData,onUpdateData}) {

  const [edit,setEdit]=useState(false)

  const handleDelete = () =>{
    onDeleteData(task.id)
  }

  const handleEdit = () =>{
    setEdit(!edit)
  }
  const handleSubmit = (id,updateTitle,updateTaskText) =>{
    onUpdateData(id,updateTitle,updateTaskText)
    setEdit(false)
  }

  return (
    <div className='w-full md:w-1/2 lg:w-1/3'>
      {
        edit ? 
        <TaskCreate task={task} onUpdate={handleSubmit}  taskUpdate={true}/>
        :
        
      <div className='border-2 border-purple-600 p-5'>
        <h3  className='text-lg font-semibold'>Mövzunun adı:</h3>
         <p className='pb-3'>{task.title}</p>
         <h3 className='text-lg font-semibold'>Mövzu haqqında:</h3>
         <p className='pb-3'>{task.taskText}</p>
         <button onClick={handleDelete} className='bg-red-500 rounded-lg px-5 py-1 text-white'>Sil</button>
         <button onClick={handleEdit} className='bg-green-500  ml-5 rounded-lg px-5 py-1'>Yenilə</button>
      </div>

      }
    </div>
  )
}

export default TaskShow