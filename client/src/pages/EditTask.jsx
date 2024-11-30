import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditTask = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [task, setTask] = useState({
        title: "",
        description: "",
        due_date: "",
        status: "",
    })

    const showData = async (id) => {
        try {
            const res = await axios({
                method: "GET",
                url: `http://localhost:3000/items/${id}`
            })
            setTask(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        showData(id)
    }, [id])

    const handleChange = (e) => {
        const { type, name, value } = e.target;
        const updatedValue = type === "number" ? Number(value) : value
        setTask((prev) => ({ ...prev, [name]: updatedValue }))
    }

    const handleEdit = async () => {
        try {

            const updatedTask = {
                ...task,
                status: task.status === "pending" ? 0 : 1
            };
            const res = await axios({
                method: "PUT",
                url: `http://localhost:3000/edititems/${id}`,
                data: updatedTask
            })
            if (res.status === 201) {
                
            }
        } catch (error) {
            console.log(error)
        }
    }

    const { title, description, due_date, status } = task
    return (
        <div style={{ display: 'flex', alignItems: "center", flexDirection: "column", gap: "10px", width:"300px", margin:"auto"}}>
            <input value={title} onChange={handleChange} type="text" name="title" placeholder="Title" style={{width:"100%", height:"30px"}}/>
            <textarea value={description} onChange={handleChange} name="description" placeholder="Description" style={{width:"100%"}}></textarea>

            <input
            style={{width:"100%"}}
                value={due_date}
                onChange={handleChange}
                type="date"
                name="due_date"
                placeholder="Due Date"
            />

            <select value={status} onChange={handleChange} name="status" style={{width:"100%"}}>
                <option value="">Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
            </select>

            <button onClick={()=>{
                handleEdit()
                navigate(`/task/view/${id}`)}
                }
                >Edit Task</button>
        </div>
    )
}

export default EditTask
