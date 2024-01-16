import React from 'react'
import TaskShow from './TaskShow'

function TaskList({data,onDeleteData,onUpdateData}) {
  return (
    <div className='flex gap-8'>
        {
            data.map((item,index)=>{
                return <TaskShow key={index} task={item} onDeleteData={onDeleteData} onUpdateData={onUpdateData}/>
            })
        }
    </div>
  )
}

export default TaskList