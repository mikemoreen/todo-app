import React, {useState, createContext} from 'react';

// Router
import { Route, Routes } from "react-router-dom";
// Rages
import TasksPage from './pages/TasksPage';
import AddTaskPage from './pages/AddTaskPage';
import TaskDescriptionPage from './pages/TaskDescriptionPage'

interface Tasks {
  tasks: TaskType[],
  addTask: (arg: TaskType) => void
  deleteTask: (arg: string) => void
}
export type TaskType = {
  title: string;
  comments: string;
  id: string;
}
export const TasksContext = createContext<Tasks>({tasks:[], addTask: ()=> {}, deleteTask: ()=> {}});


const App:React.FC = () =>{

  const [tasks, setNewTask] = useState<TaskType[]>([])

  const addTask = (task: TaskType) => {
    setNewTask([...tasks, task])
  }

  const deleteTask = (id: string) => {
    const newArray = tasks.filter((el: TaskType) => id !== el.id)
    console.log('newArray', newArray)
    setNewTask(newArray)
  }

  return (
    <TasksContext.Provider value={{tasks, addTask, deleteTask}}>
      <div className="App">
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/add_card" element={<AddTaskPage />} />
          <Route path="/task_description/:id" element={<TaskDescriptionPage />} />
        </Routes>
      </div>
    </TasksContext.Provider>
  );
}

export default App;
