import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import IsLoading from '../Components/IsLoading'
import ErrorHandling from '../Components/ErrorHandling'

const ViewTask = () => {
  const navigate= useNavigate()
    const {id}= useParams()
    const [task, setTask]=useState([])
    const [isLoading, setIsLoading] =useState(false)
  const [errorHandle, setErrorHandle]=useState(false)

    const singleDataFetch= async (id)=>{
      try {
        // setIsLoading(true)
        const res= await axios({
          method: 'GET',
          url:`http://localhost:3000/items/${id}`,
        })
        setTask(res.data)
        console.log(res.data);
        // setIsLoading(false)
        
      } catch (error) {
        setIsLoading(true)
        setErrorHandle(true)
      }

    }

    const handleDelete= async ()=>{
      const res= await axios({
        method: 'DELETE',
        url:`http://localhost:3000/deleteitems/${id}`
      })
      if (res.status === 200){
        navigate(`/taskslist`)
      }
    }

    useEffect(()=>{
      singleDataFetch(id)
    },[id])

    // if (isLoading){
    //   return <IsLoading/>
    // }
    // if (errorHandle){
    //   return <ErrorHandling/>
    // }

  return (
    <div style={{border:"2px dashed blue", width:"500px"}}>
      <h1>Title: {task.title}</h1>  
      <p>Description: {task.description}</p>
      <p>due_date: {task.due_date}</p>
      <p>Status: {task.status === 0 ? "Pending" : "Completed"}</p>
      <br />
      <button onClick={()=> navigate(`/task/edit/${id}`)}>Edit Task</button>
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  )
}

export default ViewTask