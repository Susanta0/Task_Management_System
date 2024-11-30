import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    due_date: "",
    status: "",
  });

  const handleChange = (e) => {
    const { type, name, value } = e.target;
    const updateValue = type === "number" ? Number(value) : value;
    setFormState({ ...formState, [name]: updateValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      // Convert 'status' to the numeric value before sending the request
    const statusValue = status === "pending" ? 0 : status === "completed" ? 1 : null;
    const dataToSend = { ...formState, status: statusValue };
      const res = await axios({
        method: "POST",
        url: `http://localhost:3000/additems`,
        data: dataToSend,
      });
      console.log(res.data);
      if (res.status === 201) {
        navigate(`/taskslist`);
      }
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
    }
  };

  const { title, description, due_date, status } = formState;
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: "center", flexDirection: "column", gap: "10px", width:"300px", margin:"auto"}}>
      <input value={title} onChange={handleChange} type="text" name="title" placeholder="Title" style={{width:"100%", height:"30px"}} />
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
        <option value="0">Pending</option>
        <option value="1">Completed</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default CreateTask;