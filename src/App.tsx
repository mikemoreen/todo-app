import React, { useState, createContext } from "react";

import { Route, Routes } from "react-router-dom";

import TasksPage from "./pages/TasksPage";
import AddTaskPage from "./pages/AddTaskPage";
import TaskDescriptionPage from "./pages/TaskDescriptionPage";
import TaskEditPage from "./pages/TaskEditPage";

interface Tasks {
  tasks: TaskType[];
  addTask: (arg: TaskType) => void;
  deleteTask: (arg: string) => void;
  changeTaskStatus: (arg: string) => void;
  editTask: (ard: TaskType) => void;
}
export type TaskType = {
  title: string;
  comments: string;
  id: string;
  status: boolean;
};

export const TasksContext = createContext<Tasks>({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
  changeTaskStatus: () => {},
  editTask: () => {},
});

const App: React.FC = () => {
  console.log('hi')
  const [tasks, setNewTask] = useState<TaskType[]>([]);

  const addTask = (task: TaskType) => {
    setNewTask([...tasks, task]);
  };

  const deleteTask = (id: string) => {
    const newArray = tasks.filter((el: TaskType) => id !== el.id);
    setNewTask(newArray);
  };

  const changeTaskStatus = (id: string) => {
    const newArray = tasks.map((el: TaskType) => {
      if (id === el.id) {
        el.status = !el.status;
      }
      return el;
    });
    setNewTask(newArray);
  };

  const editTask = (newTask: TaskType) => {
    const { id } = newTask;
    const newArray = tasks.map((el: TaskType) => {
      if (id === el.id) {
        el = newTask;
      }
      return el;
    });
    setNewTask(newArray);
  };

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, deleteTask, changeTaskStatus, editTask }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/add_card" element={<AddTaskPage />} />
          <Route
            path="/task_description/:id"
            element={<TaskDescriptionPage />}
          />
          <Route path="/task_edit/:id" element={<TaskEditPage />} />
        </Routes>
      </div>
    </TasksContext.Provider>
  );
};

export default App;
