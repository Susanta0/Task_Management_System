import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import TasksList from "../pages/TasksList";
import CreateTask from "../pages/CreateTask";
import ViewTask from "../pages/ViewTask";
import EditTask from "../pages/EditTask";
import Home from "../pages/Home";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/taskslist" element={<TasksList />} />
        <Route path="/task/create" element={<CreateTask />} />
        <Route path="/task/view/:id" element={<ViewTask />} />
        <Route path="/task/edit/:id" element={<EditTask />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
