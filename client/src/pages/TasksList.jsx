import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskDetails from "../Components/TaskDetails";
import IsLoading from "../Components/IsLoading";
import ErrorHandling from "../Components/ErrorHandling";

const TasksList = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorHandle, setErrorHandle] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  // Fetch data once from the backend
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("http://localhost:3000/items");
      setTasks(res?.data || []);
      setFilteredTasks(res?.data || []);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setErrorHandle(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Apply filters and search
  useEffect(() => {
    let filtered = [...tasks];

    // Apply status filter
    if (filterValue) {
      filtered = filtered.filter(
        (task) => task.status === parseInt(filterValue)
      ); // Ensure numeric comparison
    }

    // Apply search filter
    if (searchValue) {
      filtered = filtered.filter(
        (task) =>
          task.title &&
          task.title.toLowerCase().includes(searchValue.toLowerCase()) // Ensure task.title exists
      );
    }

    setFilteredTasks(filtered);
  }, [filterValue, searchValue, tasks]);

  if (errorHandle) {
    return <ErrorHandling />;
  }

  return (
    <>
    <div style={{display:"grid",  gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px", background:"blue"}}>
      
      <div>
        <button onClick={() => navigate(`/task/create`)}>Create Task</button>
      </div>

      <div>
        <select
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          >
          <option value="">Select Status</option>
          <option value="0">Pending</option>
          <option value="1">Completed</option>
        </select>
      </div>

      <div>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          type="search"
          placeholder="Search..."
          />
      </div>

      </div>
      {isLoading ? (
        <IsLoading />
      ) : (
        <div style={{display:"grid",  gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px", marginTop:"20px"}}>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => <TaskDetails key={task.id} {...task} />)
          ) : (
            <p>No tasks found.</p>
          )}
        </div>
      )}
    </>
  );
};

export default TasksList;
