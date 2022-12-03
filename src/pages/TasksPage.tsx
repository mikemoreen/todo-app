import React from "react";
import { useNavigate } from "react-router-dom";
import Tasks from "../components/Tasks";

const TasksPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col  items-center justify-center ">
        <div className="mb-4">
          <h1>Todo List</h1>
        </div>
        <div>
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border 
                    border-gray-400 rounded shadow"
            onClick={() => navigate("/add_card")}
          >
            Add Task
          </button>
        </div>
      </div>
      <div className="relative flex py-5 items-center  justify-center w-[70rem]">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400">Tasks</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <Tasks />
    </div>
  );
};

export default TasksPage;
