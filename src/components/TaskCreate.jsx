import React, { useState } from 'react'

function TaskCreate({onData,task,taskUpdate,onUpdate}) {
    const [title,setTitle]=useState(task ? task.title : "")
    const [taskText,setTaskText]=useState(task ? task.taskText : "")

    const handleFormSubmit = (e) =>{
        e.preventDefault()
        if(taskUpdate){
         onUpdate(task.id,title,taskText)
        }else{
         onData(title,taskText)
        }
        setTaskText("")
        setTitle("") 
    }
    const handleChangeTitle = (e) =>{
       setTitle(e.target.value)
    }
    const handleChangetaskText = (e) =>{
       setTaskText(e.target.value)
       console.log(taskText);
    }


  return (
   <div>
     {
        taskUpdate ?
        <form onSubmit={handleFormSubmit} className=' border-2 border-green-500 rounded-xl p-5'>
        <label htmlFor='title' className='text-lg font-semibold block'>Mövzunun adı:</label>
        <input type="text"
         id='title' 
         value={title}
         onChange={handleChangeTitle}
         className='border-2 border-black w-[100%] px-2 my-3'/>
        <label htmlFor="text" 
        className='text-lg font-semibold block'>
        Mövzu haqqında:</label>
        <textarea 
        id="text"
        value={taskText}
        onChange={handleChangetaskText}
        className='border-2 border-black w-[100%] px-2 my-3'
        cols="30" rows="5"></textarea>
        <button type='submit' 
        className='bg-purple-500 w-[100%] py-1 rounded-lg text-2xl font-semibold'>Dəyişin</button>
   </form>
        :
        <div className='flex justify-center'>
        <div>
           <h1 className='text-3xl italic font-medium text-center'>Tapşırığ əlavə edin...</h1>
           <form onSubmit={handleFormSubmit} className='my-10 border-2 border-green-500 rounded-xl p-5'>
                <label htmlFor='title' className='text-lg font-semibold block'>Mövzunun adı:</label>
                <input type="text"
                 id='title' 
                 value={title}
                 onChange={handleChangeTitle}
                 className='border-2 border-black w-[100%] px-2 my-3'/>
                <label htmlFor="text" 
                className='text-lg font-semibold block'>
                Mövzu haqqında:</label>
                <textarea 
                id="text"
                value={taskText}
                onChange={handleChangetaskText}
                className='border-2 border-black w-[100%] px-2 my-3'
                cols="30" rows="5"></textarea>
                <button type='submit' 
                className='bg-green-500 w-[100%] py-1 rounded-lg text-2xl font-semibold'>Əlavə edin</button>
           </form>
        </div>
    </div>
   }
   
      
   </div>
  )
}

export default TaskCreate