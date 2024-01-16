import React, {useEffect, useState } from 'react'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import axios from "axios"
function App() {
  const [data,setData]=useState([])

 

  const handleData= async(title,taskText)=>{
    const response= await axios.post("http://localhost:3000/tasks",{
      title,
      taskText
    })
    setData([...data,response.data])
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/tasks');
      setData(response.data);
    };

    fetchData();
  },[])
  const handleDeleteData = async(id) =>{
    await axios.delete(`http://localhost:3000/tasks/${id}`)
   const deleteData=data.filter((item)=>{
    return item.id !==id
   })
   setData(deleteData)
  }

  const handleEdit = async(id,updateTitle,updateTaskText) =>{
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title:updateTitle,
      taskText:updateTaskText
    })
      const editItem=data.map((item)=>{
        if(item.id===id){
          return {id,title:updateTitle,taskText:updateTaskText}
        }
        return item
      })
      setData(editItem)
  }

  return (
    <div className='container mx-auto py-10'>
      <TaskCreate onData={handleData}/>
      <TaskList data={data} onDeleteData={handleDeleteData} onUpdateData={handleEdit}/>
    </div>
  )
}

export default App