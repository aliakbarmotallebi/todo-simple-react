import React from "react";

import Task from "./Task";

const Tasks = ({tasks, handleDeleteTask}) =>{
  return (
    <div className="w-full p-2">
      { tasks.map( task => {
        return <Task
                key={task.id}
                item={task.item}
                deleted={() => handleDeleteTask(task.id) }/>
      })}
    </div>
  )
}

export default Tasks;
