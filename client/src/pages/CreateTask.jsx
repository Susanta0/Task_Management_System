// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const CreateTask = () => {
//   const navigate = useNavigate();
//   const [formState, setFormState] = useState({
//     title: "",
//     description: "",
//     due_date: "",
//     status: "",
//   });

//   const handleChange = (e) => {
//     const { type, name, value } = e.target;
//     const updateValue = type === "number" ? Number(value) : value;
//     setFormState({ ...formState, [name]: updateValue });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); 
//     try {
//       // Convert 'status' to the numeric value before sending the request
//     const statusValue = status === "pending" ? 0 : status === "completed" ? 1 : null;
//     const dataToSend = { ...formState, status: statusValue };
//       const res = await axios({
//         method: "POST",
//         url: `http://localhost:3000/additems`,
//         data: dataToSend,
//       });
//       console.log(res.data);
//       if (res.status === 201) {
//         navigate(`/taskslist`);
//       }
//     } catch (error) {
//       console.log(error.response ? error.response.data : error.message);
//     }
//   };

//   const { title, description, due_date, status } = formState;
//   return (
//     <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: "center", flexDirection: "column", gap: "10px", width:"300px", margin:"auto"}}>
//       <input value={title} onChange={handleChange} type="text" name="title" placeholder="Title" style={{width:"100%", height:"30px"}} />
//       <textarea value={description} onChange={handleChange} name="description" placeholder="Description" style={{width:"100%"}}></textarea>

//       <input
//       style={{width:"100%"}}
//         value={due_date}
//         onChange={handleChange}
//         type="date"
//         name="due_date"
//         placeholder="Due Date"
//       />

//       <select value={status} onChange={handleChange} name="status" style={{width:"100%"}}>
//         <option value="">Status</option>
//         <option value="pending">Pending</option>
//         <option value="completed">Completed</option>
//       </select>

//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default CreateTask;


import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    due_date: "",
    status: "", // Default empty
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert 'status' to numeric before sending
      const statusValue =
        formState.status === "pending"
          ? 0
          : formState.status === "completed"
          ? 1
          : null;

      const dataToSend = { ...formState, status: statusValue };

      const res = await axios.post("http://localhost:3000/additems", dataToSend);

      if (res.status === 201) {
        navigate("/taskslist");
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  const { title, description, due_date, status } = formState;

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "300px",
        margin: "auto",
      }}
    >
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Title"
        style={{ width: "100%", height: "30px" }}
      />
      <textarea
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Description"
        style={{ width: "100%" }}
      />
      <input
        type="date"
        name="due_date"
        value={due_date}
        onChange={handleChange}
        style={{ width: "100%" }}
      />
      <select
        name="status"
        value={status}
        onChange={handleChange}
        style={{ width: "100%" }}
      >
        <option value="">Status</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default CreateTask;
