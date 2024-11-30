import React from 'react'
import { useNavigate} from 'react-router-dom'

const TaskDetails = ({id, title, description, due_date, status}) => {
    
    const navigate = useNavigate()
  return (
    <div style={{border:"2px solid green"}}>
        <h3>Title: {title}</h3>
        <p>Description: {description}</p>
        <p>Assignee: {due_date}</p>
        <p>Status: {status === 0 ? "Pending" : "Completed"}</p>
        <button onClick={()=> navigate(`/task/view/${id}`)}>view</button>
    </div>
  )
}

export default TaskDetails