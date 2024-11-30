


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import IsLoading from '../Components/IsLoading';
import ErrorHandling from '../Components/ErrorHandling';

const ViewTask = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorHandle, setErrorHandle] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup visibility state

  const singleDataFetch = async (id) => {
    setIsLoading(true);
    setErrorHandle(false);
    try {
      const res = await axios({
        method: 'GET',
        url: `http://localhost:3000/items/${id}`,
      });
      setTask(res.data);
      console.log(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching task:", error);
      setErrorHandle(true);
      setIsLoading(false); 
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    setErrorHandle(false);
    try {
      const res = await axios({
        method: 'DELETE',
        url: `http://localhost:3000/deleteitems/${id}`,
      });
      if (res.status === 200) {
        setIsLoading(false);
        
        navigate(`/taskslist`);
      }
    } catch (error) {
      console.error("Error deleting the task:", error);
      setErrorHandle(true); 
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    singleDataFetch(id);
  }, [id]);


  if (isLoading) {
    return <IsLoading />; 
  }

  if (errorHandle) {
    return <ErrorHandling />; 
  }

  return (
    <div style={{ border: "2px dashed blue", width: "500px" }}>
      <h1>Title: {task.title}</h1>
      <p>Description: {task.description}</p>
      <p>Due Date: {task.due_date}</p>
      <p>Status: {task.status === 0 ? "Pending" : "Completed"}</p>
      <br />
      <button onClick={() => navigate(`/task/edit/${id}`)}>Edit Task</button>
      <button onClick={() => setIsPopupVisible(true)}>Delete Task</button>

      {/* Custom Popup */}
      {isPopupVisible && (
        <div style={popupStyles.overlay}>
          <div style={popupStyles.container}>
            <h3>Are you sure you want to delete this task?</h3>
            <p>This action cannot be undone.</p>
            <div>
              <button
                onClick={() => {
                  handleDelete();
                  setIsPopupVisible(false);
                }}
                style={popupStyles.confirmButton}
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setIsPopupVisible(false)}
                style={popupStyles.cancelButton}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


const popupStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    width: "300px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  confirmButton: {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cancelButton: {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "gray",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ViewTask;
